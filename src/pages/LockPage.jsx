import React from 'react';
import { useTranslation } from 'react-i18next';
import { LockForm } from '../components/auth/lockForm/LockForm';
import { PageTitle } from '../components/common/pageTitles/PageTitle';

const LockPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle>{t('common.lock')}</PageTitle>
      <LockForm />
    </>
  );
};

export default LockPage;
