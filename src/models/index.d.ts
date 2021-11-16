import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class Recipe {
  readonly uuid: string;
  readonly NAME: string;
  readonly ACTIVE: string;
  constructor(init: ModelInit<Recipe>);
}

type Todo2MetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TodoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Todo2 {
  readonly id: string;
  readonly nombre: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Todo2, Todo2MetaData>);
  static copyOf(source: Todo2, mutator: (draft: MutableModel<Todo2, Todo2MetaData>) => MutableModel<Todo2, Todo2MetaData> | void): Todo2;
}

export declare class Todo {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Todo, TodoMetaData>);
  static copyOf(source: Todo, mutator: (draft: MutableModel<Todo, TodoMetaData>) => MutableModel<Todo, TodoMetaData> | void): Todo;
}