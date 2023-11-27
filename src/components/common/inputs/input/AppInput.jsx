import React from 'react';
import { Input } from 'antd';
import * as S from './AppInput.styles';

const InternalInput = React.forwardRef(({ className, children, ...props }, ref) => (
  <S.Input ref={ref} className={className} {...props}>
    {children}
  </S.Input>
));

export const AppInput = InternalInput;

AppInput.Group = Input.Group;
AppInput.Search = Input.Search;
AppInput.TextArea = Input.TextArea;
AppInput.Password = Input.Password;
