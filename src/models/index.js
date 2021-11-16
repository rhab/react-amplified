// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Todo2, Todo, Recipe } = initSchema(schema);

export {
  Todo2,
  Todo,
  Recipe
};