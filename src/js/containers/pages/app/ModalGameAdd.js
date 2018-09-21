// import magical things
import React, { Component } from 'react';
import { connect } from 'react-redux';

// acitons
import { CreateNewGame } from 'store/actions/Games.actions';
import { ViewGames } from 'store/actions/Nav.actions';

/*
================================================================================
  class
================================================================================
*/

class PageHome extends Component {
  constructor() {
    super();
    this.gameNameInput;
    this.bindedHandleCreateGame = this.handleCreateGame.bind(this);
    this.bindedHandleCancelCreate = this.handleCancelCreate.bind(this);
  }

  /*
  ================================================================================
    USER INPUT
  ================================================================================
  */

  handleCreateGame() {
    const name = this.gameNameInput.value;
    this.props.CreateNewGame({ name });
  }
  handleCancelCreate() {
    this.props.ViewGames();
  }

  /*
  ================================================================================
    rendering
  ================================================================================
  */

  render() {
    return (
      <div className="app-screen modal">
        <p>ADD GAME</p>
        <input type="text" placeholder="enter game name" ref={(r) => (this.gameNameInput = r)} />
        <button onClick={this.bindedHandleCreateGame}>Create Game</button>
        <button onClick={this.bindedHandleCancelCreate}>cancel</button>
      </div>
    );
  }
}

/*
================================================================================
  hook up to redux
================================================================================
*/

function mapStateToProps(state) {
  return {};
}
const StoreActions = { CreateNewGame, ViewGames };

export default connect(
  mapStateToProps,
  StoreActions
)(PageHome);
