import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Homepage } from '../pages';

const Router = () => {
  return (
    <Switch>
      <Route path="/" component={Homepage} />
    </Switch>
  );
};

export default Router;
