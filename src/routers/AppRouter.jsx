import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';
import ForgotPasswordPage from '../pages/ForgotPasswordPage';
import LockPage from '../pages/LockPage';

import MainLayout from '../components/layouts/main/MainLayout';
import RequireAuth from './RequireAuth';
import { withLoading } from '../utils/withLoading';
import DashboardPage from '../pages/DashboardPages';

const Auth = React.lazy(() => import('../components/layouts/auth/Auth'));
const Error404Page = React.lazy(() => import('../pages/Error404Page'));
const SamplePage = React.lazy(() => import('../pages/SamplePage'));
const RolesListPage = React.lazy(() => import('../pages/users/roles/RolesListPage'));
const Logout = React.lazy(() => import('./Logout'));

export const DASHBOARD_PATH = '/';

const Dashboard = withLoading(DashboardPage);
const Error404 = withLoading(Error404Page);
const Sample = withLoading(SamplePage);
const Roles = withLoading(RolesListPage);
const AuthLayoutFallback = withLoading(Auth);
const LogoutFallback = withLoading(Logout);

export const AppRouter = () => {
  const protectedLayout = (
    <RequireAuth>
      <MainLayout />
    </RequireAuth>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path={DASHBOARD_PATH} element={protectedLayout}>
          <Route index element={<Dashboard />} />
          <Route path="/sample" element={<Sample />} />
          <Route path="/users/roles" element={<Roles />} />
          <Route path="*" element={<Error404 />} />
        </Route>
        <Route path="/auth" element={<AuthLayoutFallback />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="sign-up" element={<SignUpPage />} />
          <Route
            path="lock"
            element={
              <RequireAuth>
                <LockPage />
              </RequireAuth>
            }
          />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
          {/* <Route path="security-code" element={<SecurityCodePage />} />
          <Route path="new-password" element={<NewPasswordPage />} /> */}
        </Route>
        <Route path="/logout" element={<LogoutFallback />} />
      </Routes>
    </BrowserRouter>
  );
};
