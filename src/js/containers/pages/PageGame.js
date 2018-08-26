// import magical things
import React, { Component } from 'react';
import { connect } from 'react-redux';

/*
================================================================================
    base app class use to define to main layout
================================================================================
*/

class PageGame extends Component {
  constructor() {
    super();
  }

  /*
  ================================================================================
    rendering
  ================================================================================
  */

  render() {
    return <div className="app-screen">PageGame</div>;
  }
}

/*
================================================================================
    hook up to redux
================================================================================
*/

function mapStateToProps(state, props) {
  return {
    gameid: props.match.params['gameid']
  };
}
function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageGame);
