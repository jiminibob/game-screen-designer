// import magical things
import React, { Component } from 'react';
import { connect } from 'react-redux';

// actions
import * as NavActions from 'store/actions/Nav.actions';

/*
================================================================================
    base app class use to define to main layout
================================================================================
*/

class PageGameNotFound extends Component {
  constructor() {
    super();
    this.bindedHandleViewGames = this.handleViewGames.bind(this);
  }

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
        <p>CANNOT FIND GAME</p>
        <button onClick={this.bindedHandleViewGames}>Go to Game Select</button>
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
  return {};
}

const storeActions = {
  ViewGames: NavActions.ViewGames
};

export default connect(
  mapStateToProps,
  storeActions
)(PageGameNotFound);
