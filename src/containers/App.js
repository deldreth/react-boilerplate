import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Posts from './posts';

class App extends React.Component {
  static propTypes = {
    loaded: PropTypes.bool
  };

  render () {
    const { loaded } = this.props;

    if (!loaded) {
      return (
        <div>Loading...</div>
      );
    }

    return (
      <Posts />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loaded: state.app.loaded
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
