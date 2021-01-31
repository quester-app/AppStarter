import {Model} from './Model';

export type Album = Model & {
  userId: number;
  title: string;
};
