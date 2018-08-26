// import magical things
import React, { Component } from 'react';
import { connect } from 'react-redux';

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
        <div key={index} data-gameid={game.id}>
          <p>{game.name}</p>
        </div>
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
function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageGames);
