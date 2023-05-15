import React from 'react';
import styled from '@emotion/styled';
import {colors} from '@/styles/colors';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({message}: ErrorMessageProps) => {
  return <ErrorText>{message}</ErrorText>;
};

const ErrorText = styled.span`
  display: block;
  text-align: start;

  font-size: 16px;
  font-weight: 500;
  color: ${colors.MAIN_COLOR};
  margin-top: 8px;
`;

export default ErrorMessage;
