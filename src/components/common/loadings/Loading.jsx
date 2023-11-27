import React from 'react';
import styled from 'styled-components';
import { GlobalSpinner } from '../globalSpinners/GlobalSpinner';
import { useAppSelector } from '../../../hooks/reduxHooks';
import { themeObject } from '../../../styles/themes/themeVariables';

export const Loading = ({ size, color }) => {
  const theme = useAppSelector((state) => state.theme.theme);
  const spinnerColor = color || themeObject[theme].spinnerBase;

  return (
    <SpinnerContainer>
      <GlobalSpinner size={size} color={spinnerColor} />
    </SpinnerContainer>
  );
};

const SpinnerContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
