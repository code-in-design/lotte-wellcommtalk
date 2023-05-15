import {CreatedAt} from '../api.types';

export interface GetPostsParams {
  offset: number;
  limit: number;
}

export interface Post extends CreatePostParams {
  id: string;
  createdAt: CreatedAt;
}

export interface CreatePostParams {
  title: string;
  content: string;
  imageUrls: string[];
  writer: Writer;
  userId: string;
}

interface Writer {
  employeeNumber: string;
}
