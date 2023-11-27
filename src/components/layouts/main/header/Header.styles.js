import { AppLayout } from '../../../common/layouts/AppLayout';
import { LAYOUT, media } from '../../../../styles/themes/constants';
import styled, { css } from 'styled-components';

export const Header = styled(AppLayout.Header)`
  line-height: 1.5;

  @media only screen and ${media.md} {
    padding: ${LAYOUT.desktop.paddingVertical} ${LAYOUT.desktop.paddingHorizontal};
    height: ${LAYOUT.desktop.headerHeight};
  }

  @media only screen and ${media.md} {
    ${(props) =>
      props?.$isTwoColumnsLayoutHeader &&
      css`
        padding: 0;
      `}
  }
`;
