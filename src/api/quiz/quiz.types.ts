export interface SubmitQuizParams {
  userId: string;
  content: string;
}

export interface SubmitQuizResponse {
  isCorrect: boolean;
}
