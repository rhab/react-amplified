/* src/App.js */
import React, { useEffect, useState } from 'react';
import Amplify, { API, graphqlOperation, Storage } from 'aws-amplify';
import { DataStore } from '@aws-amplify/datastore';
import { Todo2 } from './models';
import { createTodo } from './graphql/mutations';
import { listTodos } from './graphql/queries';
import { withAuthenticator } from '@aws-amplify/ui-react';

const initialState = { name: '', description: '' };
const initialState2 = { nombre: '', description: '' };

const App = () => {
  const [formState, setFormState] = useState(initialState);
    const [formState2, setFormState2] = useState(initialState2);
    const [todos, setTodos] = useState([]);
    const [todos2, setTodos2] = useState([]);

  useEffect(() => {
      fetchTodos();
      fetchTodos2();
  }, []);

  function setInput2(key, value) {
      setFormState2({ ...formState, [key]: value });
  }

  function setInput(key, value) {
      setFormState({ ...formState, [key]: value });
  }

  async function fetchTodos2() {
        try {
            const todoData = await DataStore.query(Todo2);
            setTodos2(todoData);
        } catch (err) { console.log('error fetching todos2'); }
  }

  async function fetchTodos() {
    try {
        const todoData = await API.graphql(graphqlOperation(listTodos));
        const todos = todoData.data.listTodos.items;
        setTodos(todos);
    } catch (err) { console.log('error fetching todos'); }
  }

  async function addTodo2() {
    try {
        if (!formState2.nombre) return;
        const todo2 = { ...formState2 };
        setTodos2([...todos2, todo2]);
        setFormState2(initialState2);
        await DataStore.save(new Todo2({...formState2}));
    } catch (err) {
        console.log('error creating todo:', err);
    }
  }

  async function addTodo() {
    try {
        if (!formState.name || !formState.description) return;
        const todo = { ...formState };
        setTodos([...todos, todo]);
        setFormState(initialState);
        await API.graphql(graphqlOperation(createTodo, {input: todo}));
    } catch (err) {
        console.log('error creating todo:', err);
    }
  }

    return (

 <>
    <div style={styles.container}>
        <h2>Amplify Todos</h2>
            <input
                onChange={event => setInput('name', event.target.value)}
                style={styles.input}
                value={formState.name}
                placeholder="Name"
            />
            <input
                onChange={event => setInput('description', event.target.value)}
                style={styles.input}
                value={formState.description}
                placeholder="Description"
            />
        <button style={styles.button} onClick={addTodo}>Create Todo</button>
        {
            todos.map((todo, index) => (
                    <div key={todo.id ? todo.id : index} style={styles.todo}>
                    <p style={styles.todoName}>{todo.name}</p>
                    <p style={styles.todoDescription}>{todo.description}</p>
                    </div>
            ))
        }
    </div>

    <div style={styles.container}>
      <h2>Amplify Todos 2222 Datastore</h2>
      <input
        onChange={event => setInput2('nombre', event.target.value)}
        style={styles.input}
        value={formState2.nombre}
        placeholder="Nombre"
      />
      <input
        onChange={event => setInput('description', event.target.value)}
        style={styles.input}
        value={formState.description}
        placeholder="Description"
      />
      <button style={styles.button} onClick={addTodo2}>Create Todo</button>
      {
        todos.map((todo2, index) => (
          <div key={todo2.id ? todo2.id : index} style={styles.todo}>
            <p style={styles.todoName}>{todo2.nombre}</p>
          </div>
        ))
      }
        </div>
    </>
  )
}

const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
  todo: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  todoName: { fontSize: 20, fontWeight: 'bold' },
  todoDescription: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}

export default withAuthenticator(App)
