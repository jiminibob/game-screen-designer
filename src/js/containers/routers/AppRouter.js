// import magical things
import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

import AppHome from "containers/pages/AppHome";

/*
================================================================================
    base app class use to define to main layout
================================================================================
*/

class AppRouter extends Component {
  constructor() {
    super();
  }

  /*
    ================================================================================
       rendering
    ================================================================================
    */

  render() {
    return (
      <div className="app-wrapper">
        <Switch>
          <Route exact path="/" component={AppHome} />
        </Switch>
      </div>
    );
  }
}

/*
================================================================================
    private routing
================================================================================
*/

const PrivateRoute = ({ component: Component, loggedin, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      loggedin === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

/*
================================================================================
    hook up to redux
================================================================================
*/

function mapStateToProps(state, props) {
  return {};
}
function mapDispatchToProps(dispatch) {
  return {};
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AppRouter)
);
