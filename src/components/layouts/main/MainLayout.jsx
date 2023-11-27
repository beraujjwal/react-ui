import React, { useEffect, useState } from 'react';
// import { Header } from '../../../header/Header';
import Siderbar from './siderbar/Siderbar';
import Content from './content/Content';
import { Header } from './header/Header';
import * as S from './MainLayout.styles';
import { Outlet, useLocation } from 'react-router-dom';
import { DASHBOARD_PATH } from '../../../routers/AppRouter';
import { useResponsive } from '../../..//hooks/useResponsive';
import { References } from '../../common/references/References';

const MainLayout = () => {
  const [isTwoColumnsLayout, setIsTwoColumnsLayout] = useState(true);
  const [siderCollapsed, setSiderCollapsed] = useState(true);
  const { isDesktop } = useResponsive();
  const location = useLocation();

  //const toggleSider = () => setSiderCollapsed(!siderCollapsed);

  useEffect(() => {
    setIsTwoColumnsLayout([DASHBOARD_PATH].includes(location.pathname) && isDesktop);
  }, [location.pathname, isDesktop]);

  return (
    <S.LayoutMaster>
      <Siderbar isCollapsed={siderCollapsed} setCollapsed={setSiderCollapsed} />
      <S.LayoutMain>
        <Header isTwoColumnsLayout={isTwoColumnsLayout}>
          {/* <Header toggleSider={toggleSider} isSiderOpened={!siderCollapsed} isTwoColumnsLayout={isTwoColumnsLayout} /> */}
        </Header>
        <Content id="main-content" $isTwoColumnsLayout={isTwoColumnsLayout}>
          <div>
            <Outlet />
          </div>
          {!isTwoColumnsLayout && <References />}
        </Content>
      </S.LayoutMain>
    </S.LayoutMaster>
  );
};

export default MainLayout;
