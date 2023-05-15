import {colors} from '@/styles/colors';
import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

interface LoadingIndicatorProps extends IsDesktop {
  loading: boolean;
}

const LoadingIndicator = ({isDesktop, loading}: LoadingIndicatorProps) => {
  return (
    <ClipLoader
      color={colors.WHITE}
      loading={loading}
      size={isDesktop ? 32 : 24}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default LoadingIndicator;
