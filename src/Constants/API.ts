import {API_URL as API} from '~/Constants';

export const Users = {
  list: `${API}/users`,
  get: (id: string): string => `${API}/users/${id}`,
  posts: (id: string): string => `${API}/users/${id}/posts`,
  todos: (id: string): string => `${API}/users/${id}/todos`,
  albums: (id: string): string => `${API}/users/${id}/albums`,
};

export const Comments = {
  list: `${API}/comments`,
  get: (id: string): string => `${API}/comments/${id}`,
  listOfPosts: (postId: string): string => `${API}/comments?postId=${postId}`,
};

export const Albums = {
  list: `${API}/albums`,
  get: (id: string): string => `${API}/albums/${id}`,
  photos: (id: string): string => `${API}/albums/${id}/photos`,
};

export const Photos = {
  list: `${API}/photos`,
  get: (id: string): string => `${API}/photos/${id}`,
};

export const Todoss = {
  list: `${API}/todos`,
  get: (id: string): string => `${API}/todos/${id}`,
};

export const Posts = {
  list: `${API}/posts`,
  get: (id: string): string => `${API}/posts/${id}`,
  comments: (id: string): string => `${API}/posts/${id}/comments`,
};

// export const Comment = {
//   list: ,
// };
