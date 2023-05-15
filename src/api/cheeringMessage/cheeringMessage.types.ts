import {CreatedAt} from '../api.types';
import {User} from '../user/user.types';

export interface CheeringMessage {
  id: string;
  createdAt: CreatedAt;
  content: string;
  user: User;
}

export interface CreateCheeringMessageParams {
  content: string;
  user: User;
}
