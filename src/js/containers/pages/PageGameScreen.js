// import magical things
import React, { Component } from 'react';
import { connect } from 'react-redux';

//constants
import { URL_PROP_SCREENID } from 'constants/AppUrls';

/*
================================================================================
    base app class use to define to main layout
================================================================================
*/

class PageGameScreen extends Component {
  constructor() {
    super();
  }

  /*
  ================================================================================
    rendering
  ================================================================================
  */

  render() {
    return <div className="app-screen">PageGameScreen</div>;
  }
}

/*
================================================================================
    hook up to redux
================================================================================
*/

function mapStateToProps(state, props) {
  return {
    screenid: props.match.params[URL_PROP_SCREENID]
  };
}
function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageGameScreen);
