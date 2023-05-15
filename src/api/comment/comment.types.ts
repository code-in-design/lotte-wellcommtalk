import {CreatedAt} from '../api.types';
import {User} from '../user/user.types';

export interface IComment {
  id: string;
  createdAt: CreatedAt;
  content: string;
  user: User;
}

export interface CreateCommentParams {
  content: string;
  user: User;
}
