import Search                                                  from 'antd/lib/input/Search';
import { NextPage }                                            from 'next';
import Link                                                    from 'next/link';
import React                                                   from 'react';
import { Container, Header, LeftContainer, Title, UserAvatar } from './styles';

const NavBar: NextPage = () => (
  <Header>
    <Container>
      <Link href='/'>
        <Title />
      </Link>
      <LeftContainer>
        <Search
          placeholder='input search text'
          onSearch={value => console.log(value)}
          style={{ width: 200 }}
        />
        <UserAvatar />
      </LeftContainer>
    </Container>
  </Header>
);

export default NavBar;
