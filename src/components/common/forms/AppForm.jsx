import React from 'react';
import { Form } from 'antd';
import { useTranslation } from 'react-i18next';
import { AppFormTitle } from './components/AppFormTitle';
import { AppFormItem } from './components/AppFormItem';
import { AppFormList } from './components/AppFormList';
import { Notification } from '../../../utils/Notification';


export const AppForm = ({ onFinishFailed, layout = 'vertical', ...props }) => {
  const { t } = useTranslation();

  const onFinishFailedDefault = (error) => {
    Notification.error({
      message: t('common.error'),
      description: error.errorFields[0].errors,
    });
  };

  return <Form onFinishFailed={onFinishFailed || onFinishFailedDefault} layout={layout} {...props} />;
};

AppForm.Title = AppFormTitle;
AppForm.Item = AppFormItem;
AppForm.List = AppFormList;