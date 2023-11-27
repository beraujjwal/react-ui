import styled from 'styled-components';
import { media } from '../../../../styles/themes/constants';
import { AppTypography } from '../../typographies/AppTypography';

export const AppFormTitle = styled(AppTypography.Text)`
  font-weight: 700;
  font-size: 1rem;
  display: block;

  @media only screen and ${media.md} {
    font-size: 1.125rem;
  }
`;
