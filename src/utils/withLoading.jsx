import React, { Suspense } from 'react';
import { Loading } from '../components/common/loadings/Loading';

export const withLoading = (Component) => {
  return (props) => (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  );
};
