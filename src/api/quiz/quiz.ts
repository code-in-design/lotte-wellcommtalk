import {client} from '../api';
import {SubmitQuizParams, SubmitQuizResponse} from './quiz.types';

export const submitQuiz = async (params: SubmitQuizParams) => {
  const {data} = await client.post<SubmitQuizResponse>('/quiz', params);
  return data;
};
