import React from 'react';
import { defaultPaddings } from '../../../constants/defaultPaddings';
import { useResponsive } from '../../../hooks/useResponsive';
import * as S from './AppCard.styles';

export const AppCard = ({
  className,
  padding,
  size,
  autoHeight = true,
  children,
  ...props
}) => {
  const { isTablet, isDesktop } = useResponsive();

  return (
    <S.Card
      size={size ? size : isTablet ? 'default' : 'small'}
      className={className}
      bordered={false}
      $padding={
        padding || padding === 0
          ? padding
          : (isDesktop && defaultPaddings.desktop) || (isTablet && defaultPaddings.tablet) || defaultPaddings.mobile
      }
      $autoHeight={autoHeight}
      {...props}
    >
      {children}
    </S.Card>
  );
};
