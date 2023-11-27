import React from 'react';
import * as S from './AppCheckbox.styles';

export const AppCheckbox = (props) => {
  return <S.Checkbox {...props} />
};

AppCheckbox.Group = S.CheckboxGroup;