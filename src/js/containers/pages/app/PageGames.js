// import magical things
import React, { Component } from 'react';
import { connect } from 'react-redux';

// actions
import { ViewGame } from 'store/actions/Nav.actions';

// selectors
import { GetGames } from 'store/selectors/Games.selectors';

/*
================================================================================
  class
================================================================================
*/

class PageGames extends Component {
  constructor() {
    super();

    // binded methods
    this.bindedHandleGameSelect = this.handleGameSelect.bind(this);
  }

  /*
  ================================================================================
    user input
  ================================================================================
  */

  handleGameSelect(e) {
    // grab the screen id from button data attribute
    const gameid = e.currentTarget.getAttribute('data-gameid');
    if (gameid) {
      // dispatch navigation request
      this.props.ViewGame(gameid);
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
        <p>PageGames</p>
        {this.renderGames(this.props.games)}
      </div>
    );
  }

  renderGames(games) {
    return games.map((game, index) => {
      return (
        <button
          className="btn"
          key={index}
          data-gameid={game.id}
          onClick={this.bindedHandleGameSelect}
        >
          {game.name}
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

function mapStateToProps(state) {
  return {
    games: GetGames({ state })
  };
}

const storeActions = {
  ViewGame
};

export default connect(
  mapStateToProps,
  storeActions
)(PageGames);
