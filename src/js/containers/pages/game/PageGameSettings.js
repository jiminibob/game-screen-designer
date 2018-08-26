// import magical things
import React, { Component } from 'react';
import { connect } from 'react-redux';

//constants
import { URL_PROP_GAMEID } from 'constants/AppUrls';
import { ORIENTATION_PORTRAIT, ORIENTATION_LANDSCAPE } from 'constants/AppConstants';

// actions
import { UpdateGameSettings } from 'store/actions/Games.actions';

// selectors
import { GetGameById } from 'store/selectors/Games.selectors';

/*
================================================================================
  class
================================================================================
*/

class PageGameSettings extends Component {
  constructor() {
    super();

    // set form reference via ref
    this.form = false;

    // binded methods
    this.bindedhandleFormUpdated = this.handleFormUpdated.bind(this);
  }

  /*
  ================================================================================
    user input
  ================================================================================
  */

  handleFormUpdated() {
    // grab form settings and apply to updated data object
    const updatedSettings = {
      orientation: this.form.elements.orientation.value,
      hasLevels: this.form.elements.hasLevels.checked,
      canSelectLevels: this.form.elements.canSelectLevels.checked,
      canSelectCharacter: this.form.elements.canSelectCharacter.checked
    };

    // push form data to update
    this.props.UpdateGameSettings({ gameid: this.props.game.id, updatedSettings });
  }

  /*
  ================================================================================
    rendering
  ================================================================================
  */

  render() {
    return (
      <div className="app-screen">
        <p>{this.props.game.name + ' settings'}</p>
        {this.renderGameSettings(this.props.game)}
      </div>
    );
  }

  renderGameSettings(game) {
    return (
      <form onChange={this.bindedhandleFormUpdated} ref={(r) => (this.form = r)}>
        <label htmlFor="orientation">Orientation</label>
        <select name="orientation" value={game.orientation} readOnly>
          <option value={ORIENTATION_PORTRAIT}>{ORIENTATION_PORTRAIT}</option>
          <option value={ORIENTATION_LANDSCAPE}>{ORIENTATION_LANDSCAPE}</option>
        </select>
        <label htmlFor="hasLevels">Has Levels</label>
        <input type="checkbox" name="hasLevels" value={game.hasLevels} readOnly />
        <label htmlFor="canSelectLevels">Can Select Levels</label>
        <input type="checkbox" name="canSelectLevels" value={game.canSelectLevels} readOnly />
        <label htmlFor="canSelectCharacter">Can Select Character</label>
        <input type="checkbox" name="canSelectCharacter" value={game.canSelectCharacter} readOnly />
      </form>
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

const storeActions = {
  UpdateGameSettings
};

export default connect(
  mapStateToProps,
  storeActions
)(PageGameSettings);
