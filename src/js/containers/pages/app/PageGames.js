// import magical things
import React, { Component } from 'react';
import { connect } from 'react-redux';

// actions
import { ViewGame, ViewCreateGame } from 'store/actions/Nav.actions';

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
    this.bindedCreateNewGame = this.handleCreateNewGame.bind(this);
  }

  /*
  ================================================================================
    user input
  ================================================================================
  */

  handleCreateNewGame() {
    this.props.ViewCreateGame();
  }

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
        <button onClick={this.bindedCreateNewGame}>NEW GAME</button>
        {this.renderGames(this.props.games)}
      </div>
    );
  }

  renderGames(games) {
    return games.map((game, index) => {
      return (
        <button key={index} data-gameid={game.id} onClick={this.bindedHandleGameSelect}>
          <p>{game.name}</p>
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
  ViewGame,
  ViewCreateGame
};

export default connect(
  mapStateToProps,
  storeActions
)(PageGames);
