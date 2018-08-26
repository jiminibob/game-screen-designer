// import magical things
import React, { Component } from 'react';
import { connect } from 'react-redux';

// constants
import { URL_PROP_GAMEID } from 'constants/AppUrls';

//selectors
import { GetGameScreens } from 'store/selectors/Games.selectors';

// actions
import { ViewGameScreen } from 'store/actions/Nav.actions';

/*
================================================================================
    base app class use to define to main layout
================================================================================
*/

class PageGameScreens extends Component {
  constructor() {
    super();
    this.bindedHandleScreenSelect = this.handleScreenSelect.bind(this);
  }

  /*
  ================================================================================
    user input
  ================================================================================
  */

  handleScreenSelect(e) {
    const screenid = e.currentTarget.getAttribute('data-screenid');
    if (screenid) {
      this.props.ViewGameScreen({ gameid: this.props.gameid, screenid });
    }
  }

  /*
  ================================================================================
    rendering
  ================================================================================
  */

  render() {
    return (
      <div className="app-screen">
        <p>PageGameScreens</p>
        {this.renderGameSreens(this.props.gameScreens)}
      </div>
    );
  }

  renderGameSreens(screens) {
    return screens.map((screen, index) => {
      return (
        <button key={index} data-screenid={screen.id} onClick={this.bindedHandleScreenSelect}>
          <p>{screen.name}</p>
        </button>
      );
    });
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
    gameid: gameid,
    gameScreens: GetGameScreens({ state, gameid })
  };
}

const storeActions = {
  ViewGameScreen
};

export default connect(
  mapStateToProps,
  storeActions
)(PageGameScreens);
