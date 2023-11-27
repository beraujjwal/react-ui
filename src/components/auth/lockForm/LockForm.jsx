import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AppForm } from '../../common/forms/AppForm';
import { initValues as loginInitVal } from '../loginForm/LoginForm';
import { Notification } from '../../../utils/Notification';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { useResponsive } from '../../../hooks/useResponsive';
import { Dates } from '../../../constants/Dates';
import { loginUser } from '../../../store/actions/userAction';
import * as Auth from '../../layouts/auth/Auth.styles';
import * as S from './LockForm.styles';
import { AppAvatar } from '../../common/avatars/AppAvatar';

const initValues = {
  password: loginInitVal.password,
};

export const LockForm = () => {
  const navigate = useNavigate();
  const { mobileOnly } = useResponsive();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const [isLoading, setLoading] = useState(false);
  const [dateState, setDateState] = useState(new Date());
  const user = useAppSelector((state) => state.user.user);
  const fullName = `${user?.firstName} ${user?.lastName}`;

  const currentDateInUTC = dateState.toUTCString();
  const currentTime = Dates.format(currentDateInUTC, 'h:mm A');
  const currentDate = Dates.format(currentDateInUTC, 'dddd, MMMM D, YYYY');

  useEffect(() => {
    const interval = setInterval(() => setDateState(new Date()), 10 * 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = ({ password }) => {
    setLoading(true);
    dispatch(loginUser({ email: user?.email.name || '', password }))
      .unwrap()
      .then(() => {
        navigate(-1);
      })
      .catch((e) => {
        Notification.error({ message: e.message });
        setLoading(false);
      });
  };

  return (
    <Auth.FormWrapper>
      <AppForm layout="vertical" onFinish={handleSubmit} requiredMark="optional" initialValues={initValues}>
        <S.ContentWrapper>
          <S.Time>{currentTime}</S.Time>
          <S.Date>{currentDate}</S.Date>
          <S.AvatarCircle>
            <AppAvatar src={user?.imgUrl} alt="user avatar" size={mobileOnly ? 59 : 77} />
          </S.AvatarCircle>
          <S.Name>{fullName}</S.Name>
        </S.ContentWrapper>
        <S.FormItem
          label={t('common.password')}
          name="password"
          rules={[{ required: true, message: t('common.requiredField') }]}
        >
          <Auth.FormInputPassword placeholder={t('common.password')} />
        </S.FormItem>
        <AppForm.Item noStyle>
          <Auth.SubmitButton type="primary" htmlType="submit" loading={isLoading}>
            {t('common.login')}
          </Auth.SubmitButton>
        </AppForm.Item>
      </AppForm>
    </Auth.FormWrapper>
  );
};
