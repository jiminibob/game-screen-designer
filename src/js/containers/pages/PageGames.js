// import magical things
import React, { Component } from 'react';
import { connect } from 'react-redux';

// actions
import { ViewGame } from 'store/actions/App.actions';

// selectors
import { GetGames } from 'store/selectors/Games.selectors';

/*
================================================================================
    base app class use to define to main layout
================================================================================
*/

class PageGames extends Component {
  constructor() {
    super();

    this.bindedHandleGameSelect = this.handleGameSelect.bind(this);
  }

  /*
  ================================================================================
    user input
  ================================================================================
  */

  handleGameSelect(e) {
    const gameid = e.currentTarget.getAttribute('data-gameid');
    if (gameid) {
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
  ViewGame
};

export default connect(
  mapStateToProps,
  storeActions
)(PageGames);
