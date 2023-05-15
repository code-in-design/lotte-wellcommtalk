export interface User extends UserWithoutId {
  id: string;
  correct?: '정답' | '오답';
}

export interface UserWithoutId {
  name: string;
  employeeNumber: string;
}

export type LoginParams = UserWithoutId;
export type JoinParams = UserWithoutId;
