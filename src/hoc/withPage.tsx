import MainContent  from '@mallowigi/frontend/src/components/MainContent';
import NavBar       from '@mallowigi/frontend/src/components/NavBar/NavBar';
import { Layout }   from '@mallowigi/frontend/src/hoc/Layout';
import { NextPage } from 'next';
import React        from 'react';

export default function withPage(WrappedComponent: NextPage) {
  return (props: any) => (
    <Layout>
      <NavBar></NavBar>
      <MainContent>
        <WrappedComponent {...props} />
      </MainContent>
    </Layout>
  );
}
