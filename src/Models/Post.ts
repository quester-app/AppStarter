import {Model} from './Model';

export type Post = Model & {
  userId: string;
  title: string;
  body: string;
};
