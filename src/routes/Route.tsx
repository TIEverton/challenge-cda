import React from 'react';
import { connect } from 'react-redux';

import { RouteProps as ReactDOMRouteProps, Route as ReactDOMRoute, Redirect } from 'react-router-dom';

import store from '../store'

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

interface AuthenticatedProps {
  authenticated: {
    isAuthenticated: boolean;
  }
}

const Route: React.FC<RouteProps> = ({ isPrivate = false, component: Component, ...rest }) => {
  const { authenticated } = store.getState();
  return (
    <ReactDOMRoute {...rest}
      render={({ location }) => {
        return isPrivate === !!authenticated.isAuthenticated ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { from: location },
            }}
          />
        )
      }}
    />
  );
}

const mapStateToProps = (state: AuthenticatedProps) => ({
  authenticated: state.authenticated.isAuthenticated
});

export default connect(mapStateToProps)(Route)