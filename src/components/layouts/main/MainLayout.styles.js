import styled from 'styled-components';
import { media } from '../../../styles/themes/constants';
import { AppLayout } from '../../common/layouts/AppLayout';

export const LayoutMaster = styled(AppLayout)`
  height: 100vh;
`;

export const LayoutMain = styled(AppLayout)`
  @media only screen and ${media.md} {
    margin-left: 80px;
  }

  @media only screen and ${media.xl} {
    margin-left: unset;
  }
`;
