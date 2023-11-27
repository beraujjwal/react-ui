import React from 'react';
import { ConfigProvider } from 'antd';
import { HelmetProvider } from 'react-helmet-async';
import deDe from 'antd/lib/locale/de_DE';
import enUS from 'antd/lib/locale/en_US';

import { AppRouter } from './routers/AppRouter';
import { themeObject } from './styles/themes/themeVariables';
import GlobalStyle from './styles/GlobalStyle';
import { useAppSelector } from './hooks/reduxHooks';

function App() {
  const language = 'en';
  const theme = useAppSelector((state) => state?.theme?.theme);

  return (
    <>
      <meta name="theme-color" content={themeObject[theme].primary} />
      <GlobalStyle />
      <HelmetProvider>
        <ConfigProvider locale={language === 'en' ? enUS : deDe}>
          <AppRouter />
        </ConfigProvider>
      </HelmetProvider>
    </>
  );
}

export default App;
