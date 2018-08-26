// import magical things
import React, { Component } from 'react';
import { connect } from 'react-redux';

//constants
import { URL_PROP_GAMEID } from 'constants/AppUrls';

// actions
import * as NavActions from 'store/actions/Nav.actions';

// selectors
import { GetGameById } from 'store/selectors/Games.selectors';

/*
================================================================================
  class
================================================================================
*/

class PageGame extends Component {
  constructor() {
    super();

    this.bindedHandleViewGameAssets = this.handleViewGameAssets.bind(this);
    this.bindedHandleViewGameScreens = this.handleViewGameScreens.bind(this);
    this.bindedHandleViewGameSettings = this.handleViewGameSettings.bind(this);
  }

  handleViewGameAssets() {
    this.props.ViewGameAssets(this.props.game.id);
  }

  handleViewGameScreens() {
    this.props.ViewGameScreens(this.props.game.id);
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
        <button onClick={this.bindedHandleViewGameAssets}>Game Assets</button>
        <button onClick={this.bindedHandleViewGameScreens}>Game Screens</button>
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
  // grab game id from url prop
  const gameid = props.match.params[URL_PROP_GAMEID];

  return {
    game: GetGameById({ state, gameid })
  };
}

const storeActions = {
  ViewGameSettings: NavActions.ViewGameSettings,
  ViewGameAssets: NavActions.ViewGameAssets,
  ViewGameScreens: NavActions.ViewGameScreens
};

export default connect(
  mapStateToProps,
  storeActions
)(PageGame);
