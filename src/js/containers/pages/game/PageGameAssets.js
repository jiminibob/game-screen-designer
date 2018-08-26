// import magical things
import React, { Component } from 'react';
import { connect } from 'react-redux';

/*
================================================================================
  class
================================================================================
*/

class PageGameAssets extends Component {
  constructor() {
    super();
  }

  /*
  ================================================================================
    rendering
  ================================================================================
  */

  render() {
    return <div className="app-screen">PageGameAssets</div>;
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
const StoreActions = {};

export default connect(
  mapStateToProps,
  StoreActions
)(PageGameAssets);
