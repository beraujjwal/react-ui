import styled from 'styled-components';
import { Checkbox as AppCheckbox } from 'antd';

const { Group } = AppCheckbox;

export const Checkbox = styled(AppCheckbox)`
  & .ant-checkbox-inner {
    border-radius: 0.1875rem;
    height: 1.25rem;
    width: 1.25rem;
    border: 1px solid var(--primary-color);
  }

  .ant-checkbox-disabled.ant-checkbox-checked .ant-checkbox-inner::after {
    border-color: var(--disabled-color);
  }

  .ant-checkbox-disabled + span {
    color: var(--disabled-color);
  }
`;

export const CheckboxGroup = styled(Group)`
  & .ant-checkbox-inner {
    border-radius: 0.1875rem;
    height: 1.25rem;
    width: 1.25rem;
    border: 1px solid var(--primary-color);
  }
`;
