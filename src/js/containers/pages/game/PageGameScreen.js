// import magical things
import React, { Component } from 'react';
import { connect } from 'react-redux';

//constants
import { URL_PROP_SCREENID, URL_PROP_GAMEID } from 'constants/AppUrls';

// selectors
import { GetScreen } from 'store/selectors/Screens.selectors';

/*
================================================================================
  class
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
    return <div className="app-screen">{'PageGameScreen : ' + this.props.screen.name}</div>;
  }
}

/*
================================================================================
    hook up to redux
================================================================================
*/

function mapStateToProps(state, props) {
  return {
    screen: GetScreen({ state, screenid: props.match.params[URL_PROP_SCREENID] })
  };
}

const storeActions = {};

export default connect(
  mapStateToProps,
  storeActions
)(PageGameScreen);
