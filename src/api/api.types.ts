interface AxiosErrorWithData {
  response: ErrorData;
}

interface ErrorData {
  data: ErrorMessage;
}

interface ErrorMessage {
  message: string;
}

export const isErrorWithData = (error: any): error is AxiosErrorWithData => {
  if (error?.response?.data) {
    return 'message' in error.response.data;
  }

  return false;
};

export interface CreatedAt {
  _seconds: number;
  _nanoseconds: number;
}

export interface Count {
  count: number;
}
