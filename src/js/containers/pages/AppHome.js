// import magical things
import React, { Component } from "react";
import { connect } from "react-redux";

/*
================================================================================
    base app class use to define to main layout
================================================================================
*/

class AppHome extends Component {
  constructor() {
    super();
  }

  /*
  ================================================================================
    rendering
  ================================================================================
  */

  render() {
    return <div className="app-screen">HELLO APP</div>;
  }
}

/*
================================================================================
    hook up to redux
================================================================================
*/

function mapStateToProps(state) {
  return {};
}
function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppHome);
