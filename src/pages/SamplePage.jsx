import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { AppBreadcrumb } from '../components/common/breadcrumbs/AppBreadcrumb';
import { PageTitle } from '../components/common/pageTitles/PageTitle';
import * as S from './UIComponentsPage.styles';
import { AppColumn } from '../components/common/columns/AppColumn';
import { AppSpace } from '../components/common/spaces/AppSpace';

const SamplePage = () => {
  const { t } = useTranslation();

  const { pathname } = useLocation();

  const menu = [
    {
      key: '1',
      label: t('breadcrumbs.general'),
    },
    {
      key: '2',
      label: t('breadcrumbs.layout'),
    },
    {
      key: '3',
      label: t('breadcrumbs.navigation'),
    },
  ];

  return (
    <>
      <PageTitle>{t('common.breadcrumbs')}</PageTitle>
      <AppColumn>
        <S.Card title={t('breadcrumbs.basic')}>
          <AppBreadcrumb>
            <AppBreadcrumb.Item href={pathname}>{t('breadcrumbs.home')}</AppBreadcrumb.Item>
            <AppBreadcrumb.Item href={pathname}>{t('breadcrumbs.applicationCenter')}</AppBreadcrumb.Item>
            <AppBreadcrumb.Item href={pathname}>{t('breadcrumbs.applicationList')}</AppBreadcrumb.Item>
            <AppBreadcrumb.Item href={pathname}>{t('breadcrumbs.application')}</AppBreadcrumb.Item>
          </AppBreadcrumb>
        </S.Card>
        <S.Card title={t('breadcrumbs.withIcon')}>
          <AppBreadcrumb separator=">">
            <AppBreadcrumb.Item href={pathname}>
              <HomeOutlined />
            </AppBreadcrumb.Item>
            <AppBreadcrumb.Item href={pathname}>
              <AppSpace>
                <UserOutlined />
                <span>{t('breadcrumbs.applicationList')}</span>
              </AppSpace>
            </AppBreadcrumb.Item>
            <AppBreadcrumb.Item href={pathname}>{t('breadcrumbs.application')}</AppBreadcrumb.Item>
          </AppBreadcrumb>
        </S.Card>
        <S.Card title={t('breadcrumbs.customSeparator')}>
          <AppBreadcrumb separator=">">
            <AppBreadcrumb.Item href={pathname}>{t('breadcrumbs.home')}</AppBreadcrumb.Item>
            <AppBreadcrumb.Item href={pathname}>{t('breadcrumbs.applicationCenter')}</AppBreadcrumb.Item>
            <AppBreadcrumb.Item href={pathname}>{t('breadcrumbs.applicationList')}</AppBreadcrumb.Item>
            <AppBreadcrumb.Item href={pathname}>{t('breadcrumbs.application')}</AppBreadcrumb.Item>
          </AppBreadcrumb>
        </S.Card>
        <S.Card title={t('breadcrumbs.withDropdown')}>
          <AppBreadcrumb>
            <AppBreadcrumb.Item href={pathname}>{t('breadcrumbs.antd')}</AppBreadcrumb.Item>
            <AppBreadcrumb.Item href={pathname}>{t('breadcrumbs.component')}</AppBreadcrumb.Item>
            <AppBreadcrumb.Item menu={{ items: menu }}>{t('breadcrumbs.general')}</AppBreadcrumb.Item>
            <AppBreadcrumb.Item href={pathname}>{t('breadcrumbs.button')}</AppBreadcrumb.Item>
          </AppBreadcrumb>
        </S.Card>
      </AppColumn>
    </>
  );
};

export default SamplePage;
