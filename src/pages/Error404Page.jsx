import React from 'react';
import { useTranslation } from 'react-i18next';
import { Error } from '../components/error/Error';
import { PageTitle } from '../components/common/pageTitles/PageTitle';
import error404 from '../assets/images/error404.svg';

const Error404Page = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle>{t('common.clientError')}</PageTitle>
      <Error img={error404} msg={t('error404.notFound')} />
    </>
  );
};

export default Error404Page;
