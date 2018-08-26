// import magical things
import React, { Component } from 'react';
import { connect } from 'react-redux';

/*
================================================================================
  class
================================================================================
*/

class PageAppSettings extends Component {
  constructor() {
    super();
  }

  /*
  ================================================================================
    rendering
  ================================================================================
  */

  render() {
    return <div className="app-screen">PageAppSettings</div>;
  }
}

/*
================================================================================
  hook up to redux
================================================================================
*/

function mapStateToProps(state, props) {
  return {};
}
const StoreActions = {};

export default connect(
  mapStateToProps,
  StoreActions
)(PageAppSettings);
