import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './layout/common';
import { MainLayout, MainLayoutSidebar } from './layout';

import {
  Home as HomePage,
  Categories as CategoryPage,
  Product as ProductPage,
  PageNotFound
} from './page';

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/home" />
      <RouteWithLayout
        component={HomePage}
        exact
        layout={MainLayout}
        pageTitle=""
        path="/home"
      />

      <RouteWithLayout
        component={PageNotFound}
        exact
        layout={MainLayoutSidebar}
        pageTitle="404"
        path="/not-found"
      />

      <RouteWithLayout
        component={CategoryPage}
        exact
        layout={MainLayoutSidebar}
        pageTitle="Category"
        path="/seller/category"
      />
      <RouteWithLayout
        component={ProductPage}
        exact
        layout={MainLayoutSidebar}
        pageTitle="Product"
        path="/seller/product"
      />
      <Redirect to="/not-found" status="404" />
    </Switch>
  );
};

export default Routes;