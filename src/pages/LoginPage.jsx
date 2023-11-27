import React from 'react';
import { useTranslation } from 'react-i18next';
import { LoginForm } from '../components/auth/loginForm/LoginForm';
import { PageTitle } from '../components/common/pageTitles/PageTitle';

const LoginPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle>{t('common.login')}</PageTitle>
      <LoginForm />
    </>
  );
};

export default LoginPage;
