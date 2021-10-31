import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const RouteWithLayout = props => {
  const { layout: Layout, component: Component,pageTitle, ...rest } = props;

  return (
    <Route
      {...rest}
      render={matchProps => (
        <Layout pageTitle={pageTitle}>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};

RouteWithLayout.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string,
  pageName: PropTypes.string,
};

export default RouteWithLayout;