import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/HomePage';
import CreateDev from '../pages/CreateDev';
import FindAllDevs from '../pages/FindAllDevs';
import Pagination from '../pages/Pagination';
import EditDev from '../pages/EditDev';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/create" component={CreateDev} />
    <Route path="/find" component={FindAllDevs} />
    <Route path="/pagination" component={Pagination} />
    <Route path="/edit/:id" component={EditDev} />
  </Switch>
);

export default Routes;
