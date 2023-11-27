import React from 'react';
import * as S from './Siderbar.styles';
import { RightOutlined } from '@ant-design/icons';
import { useResponsive } from '../../../../hooks/useResponsive';
import logo from '../../../../assets/logo.png';
import logoDark from '../../../../assets/logo-dark.png';
import { useAppSelector } from '../../../../hooks/reduxHooks';

export const SiderLogo = ({ isSiderCollapsed, toggleSider }) => {
  const { tabletOnly } = useResponsive();

  const theme = useAppSelector((state) => state.theme.theme);

  const img = theme === 'dark' ? logoDark : logo;

  return (
    <S.SiderLogoDiv>
      <S.SiderLogoLink to="/">
        <img src={img} alt="Usha Digital" width={48} height={48} />
        <S.BrandSpan>Usha Digital</S.BrandSpan>
      </S.SiderLogoLink>
      {tabletOnly && (
        <S.CollapseButton
          shape="circle"
          size="small"
          $isCollapsed={isSiderCollapsed}
          icon={<RightOutlined rotate={isSiderCollapsed ? 0 : 180} />}
          onClick={toggleSider}
        />
      )}
    </S.SiderLogoDiv>
  );
};
