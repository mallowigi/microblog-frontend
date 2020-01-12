import ArticlesList from '@mallowigi/frontend/src/components/ArticlesList';
import withPage     from '@mallowigi/frontend/src/hoc/withPage';
import { NextPage } from 'next';
import React        from 'react';

const Index: NextPage = () => (
  <ArticlesList />
);

export default withPage(Index);
