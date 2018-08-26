// import magical things
import React, { Component } from 'react';
import { connect } from 'react-redux';

//constants
import { URL_PROP_GAMEID } from 'constants/AppUrls';

// actions
import { ViewGameSettings } from 'store/actions/Nav.actions';

// selectors
import { GetGameById } from 'store/selectors/Games.selectors';

/*
================================================================================
    base app class use to define to main layout
================================================================================
*/

class PageGame extends Component {
  constructor() {
    super();

    this.bindedHandleViewGameSettings = this.handleViewGameSettings.bind(this);
  }

  handleViewGameSettings() {
    this.props.ViewGameSettings(this.props.game.id);
  }

  /*
  ================================================================================
    rendering
  ================================================================================
  */

  render() {
    return (
      <div className="app-screen">
        <p>{this.props.game.name}</p>
        <button onClick={this.bindedHandleViewGameSettings}>Game Settings</button>
      </div>
    );
  }
}

/*
================================================================================
    hook up to redux
================================================================================
*/

function mapStateToProps(state, props) {
  const gameid = props.match.params[URL_PROP_GAMEID];
  return {
    game: GetGameById({ state, gameid })
  };
}

const storeActions = {
  ViewGameSettings
};

export default connect(
  mapStateToProps,
  storeActions
)(PageGame);
