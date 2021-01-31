import {Model} from './Model';

export type Todo = Model & {
  userId: number;
  title: string;
  completed: boolean;
};
