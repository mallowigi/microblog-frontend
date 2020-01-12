import Avatar     from 'antd/lib/avatar';
import Layout     from 'antd/lib/layout';
import Typography from 'antd/lib/typography';
import React      from 'react';
import styled     from 'styled-components';

export const Header = styled(Layout.Header)`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  width: 100%;
  padding: 0 12px;
  background-color: #fff !important;
  box-shadow: 0px -4px 3px 3px rgba(0, 0, 0, 0.75);
`;
export const Container = styled.div`
  width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftContainer = styled.div``;

export const Title = styled(props => (
  <Typography.Title level={4} {...props}>
    Blogo
  </Typography.Title>
))`
  cursor: pointer;
  color: #fff;
`;

export const UserAvatar = styled(props => <Avatar icon='user' {...props} />)`
  margin-left: 16px !important;
`;
