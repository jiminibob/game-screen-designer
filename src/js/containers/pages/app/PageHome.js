// import magical things
import React, { Component } from 'react';
import { connect } from 'react-redux';

// actions
import { ViewGames } from 'store/actions/Nav.actions';

/*
================================================================================
  class
================================================================================
*/

class PageHome extends Component {
  constructor() {
    super();

    // binded methods
    this.bindedHandleViewGames = this.handleViewGames.bind(this);
  }

  /*
  ================================================================================
    USER INPUT
  ================================================================================
  */

  handleViewGames() {
    this.props.ViewGames();
  }

  /*
  ================================================================================
    rendering
  ================================================================================
  */

  render() {
    return (
      <div className="app-screen">
        <p>PageHome</p>
        <button onClick={this.bindedHandleViewGames}>VIEW GAMES</button>
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
const StoreActions = {
  ViewGames
};

export default connect(
  mapStateToProps,
  StoreActions
)(PageHome);
