// import magical things
import React, { Component } from 'react';
import { connect } from 'react-redux';

//constanys
import { URL_PROP_GAMEID } from 'constants/AppUrls';

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
function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageGame);
