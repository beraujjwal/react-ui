import React from 'react';
import { useTranslation } from 'react-i18next';
import { Table } from '../../../components/tables/Table';
import { PageTitle } from '../../../components/common/pageTitles/PageTitle';

const RolesListPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <PageTitle>{t('common.roles')}</PageTitle>
      <Table />
    </>
  );
};

export default RolesListPage;
