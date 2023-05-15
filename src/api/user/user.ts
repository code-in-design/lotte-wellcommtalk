import {JoinParams, LoginParams, User} from './user.types';
import {client} from '../api';

export const join = async (joinParams: JoinParams): Promise<void> => {
  const {data} = await client.post('/join', joinParams);
  return data;
};

export const login = async (loginParams: LoginParams): Promise<User> => {
  const {data} = await client.post<User>('/login', loginParams);
  return data;
};
