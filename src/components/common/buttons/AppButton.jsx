import React from 'react';
import { Button  } from 'antd';
import * as S from './AppButton.styles';

export const { Group: ButtonGroup } = Button;

export const AppButton = React.forwardRef(
  ({ className, severity, noStyle, children, ...props }, ref) => (
    <S.Button ref={ref} className={className} $noStyle={noStyle} {...props} $severity={severity}>
      {children}
    </S.Button>
  ),
);
