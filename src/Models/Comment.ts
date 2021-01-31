import {Model} from './Model';

export type Comment = Model & {
  postId: number;
  name: string;
  email: string;
  body: string;
};
