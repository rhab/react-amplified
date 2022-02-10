import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type TodoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MsgMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Todo {
  readonly id: string;
  readonly name?: string;
  readonly description?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Todo, TodoMetaData>);
  static copyOf(source: Todo, mutator: (draft: MutableModel<Todo, TodoMetaData>) => MutableModel<Todo, TodoMetaData> | void): Todo;
}

export declare class Msg {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly time?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Msg, MsgMetaData>);
  static copyOf(source: Msg, mutator: (draft: MutableModel<Msg, MsgMetaData>) => MutableModel<Msg, MsgMetaData> | void): Msg;
}