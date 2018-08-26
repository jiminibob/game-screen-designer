// import magical things
import React, { Component } from 'react';
import { connect } from 'react-redux';

/*
================================================================================
  class
================================================================================
*/

class PageGameAsset extends Component {
  constructor() {
    super();
  }

  /*
  ================================================================================
    rendering
  ================================================================================
  */

  render() {
    return <div className="app-screen">PageGameAsset</div>;
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
)(PageGameAsset);
