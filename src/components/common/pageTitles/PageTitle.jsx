import React from 'react';
import { Helmet } from 'react-helmet-async';

export const PageTitle = ({ children }) => {
  return (
    <Helmet>
      <title>{children} | Admin</title>
    </Helmet>
  );
};
