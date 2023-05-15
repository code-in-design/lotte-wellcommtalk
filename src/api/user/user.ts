import {JoinParams, LoginParams, User, UserWithoutId} from './user.types';
import {client} from '../api';

export const join = async (joinParams: JoinParams): Promise<void> => {
  const {data} = await client.post('/join', joinParams);
  return data;
};

export const login = async (loginParams: LoginParams): Promise<User> => {
  const {data} = await client.post<User>('/login', loginParams);
  return data;
};

export const getUserName = async (
  employeeNumber: UserWithoutId['employeeNumber'],
): Promise<string> => {
  const name = (await client.get('/user', {data: employeeNumber}))?.data;
  return name;
};
