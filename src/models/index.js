// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Todo, Recipe } = initSchema(schema);

export {
  Todo,
  Recipe
};