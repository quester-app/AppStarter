import {Model} from './Model';

export type Photo = Model & {
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};
