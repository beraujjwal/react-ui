import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AppForm } from '../../common/forms/AppForm';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import { forgotPassword } from '../../../store/actions/userAction';
import { Notification } from '../../../utils/Notification';

import * as S from './ForgotPasswordForm.styles';
import * as Auth from '../../layouts/auth/Auth.styles';

const initValues = {
  email: 'chris.johnson@altence.com',
};

export const ForgotPasswordForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = (values) => {
    setLoading(true);
    dispatch(forgotPassword(values))
      .unwrap()
      .then(() => {
        navigate('/auth/security-code');
      })
      .catch((err) => {
        Notification.error({ message: err.message });
        setLoading(false);
      });
  };

  return (
    <Auth.FormWrapper>
      <AppForm layout="vertical" onFinish={handleSubmit} requiredMark="optional" initialValues={initValues}>
        <Auth.BackWrapper onClick={() => navigate(-1)}>
          <Auth.BackIcon />
          {t('common.back')}
        </Auth.BackWrapper>
        <Auth.FormTitle>{t('common.resetPassword')}</Auth.FormTitle>
        <S.Description>{t('forgotPassword.description')}</S.Description>
        <Auth.FormItem
          name="email"
          label={t('common.email')}
          rules={[{ required: true, message: t('common.emailError') }]}
        >
          <Auth.FormInput placeholder={t('common.email')} />
        </Auth.FormItem>
        <AppForm.Item noStyle>
          <S.SubmitButton type="primary" htmlType="submit" loading={isLoading}>
            {t('forgotPassword.sendInstructions')}
          </S.SubmitButton>
        </AppForm.Item>
      </AppForm>
    </Auth.FormWrapper>
  );
};
