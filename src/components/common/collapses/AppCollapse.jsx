import { Collapse as AntdCollapse } from 'antd';

export const AppCollapse = (props) => {
  return <AntdCollapse {...props} />;
};

AppCollapse.Panel = AntdCollapse.Panel;
