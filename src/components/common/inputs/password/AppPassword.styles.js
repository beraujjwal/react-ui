import styled from 'styled-components';
import { AppInput } from '../input/AppInput';

export const AppPassword = styled(AppInput.Password)`
  line-height: 2;
  .ant-input-password-icon.anticon {
    color: var(--disabled-color);
    &:hover {
      color: var(--text-main-color);
    }
  }
`;
