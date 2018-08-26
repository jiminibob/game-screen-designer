// import magical things
import React, { Component } from 'react';
import { connect } from 'react-redux';

//constants
import { URL_PROP_SCREENID, URL_PROP_GAMEID } from 'constants/AppUrls';

// selectors
import { GetGameScreen } from 'store/selectors/Games.selectors';

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
  // grab game and screen id's from url props
  const screenid = props.match.params[URL_PROP_SCREENID];
  const gameid = props.match.params[URL_PROP_GAMEID];

  return {
    screen: GetGameScreen({ state, gameid, screenid })
  };
}

const storeActions = {};

export default connect(
  mapStateToProps,
  storeActions
)(PageGameScreen);