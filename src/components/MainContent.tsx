import { Layout } from 'antd';
import React      from 'react';
import styled     from 'styled-components';

const MainContent = styled(props => <Layout.Content {...props} />)`
  margin-top: 64px;
`;

export default MainContent;
