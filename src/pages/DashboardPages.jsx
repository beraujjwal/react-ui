import React from 'react';
import { useTranslation } from 'react-i18next';

import { PageTitle } from '../components/common/pageTitles/PageTitle';

const DashboardPage = () => {

  const { t } = useTranslation();
  return (
    <>
      <PageTitle>{t('common.dashboard')}</PageTitle>
      <h2>Dashboard</h2>
    </>
  );
};

export default DashboardPage;
