import React from 'react';
import * as S from './AppPassword.styles';

export const AppPassword = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <S.AppPassword ref={ref} className={className} {...props}>
      {children}
    </S.AppPassword>
  ),
);
