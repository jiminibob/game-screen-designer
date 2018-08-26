// import magical things
import React, { Component } from 'react';
import { connect } from 'react-redux';

//constants
import { URL_PROP_SCREENID, URL_PROP_GAMEID } from 'constants/AppUrls';

// selectors
import { GetGameScreen } from 'store/selectors/Games.selectors';

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
    return <div className="app-screen">{'PageGameScreen : ' + this.props.screen.name}</div>;
  }
}

/*
================================================================================
    hook up to redux
================================================================================
*/

function mapStateToProps(state, props) {
  const screenid = props.match.params[URL_PROP_SCREENID];
  const gameid = props.match.params[URL_PROP_GAMEID];
  return {
    screen: GetGameScreen({ state, gameid, screenid })
  };
}
function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageGameScreen);
