import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
  static propTypes = {
    loaded: PropTypes.bool
  };

  render () {
    let message = 'Loading';

    if (this.props.loaded) {
      message = 'It works.';
    }
    return (
      <div>{message}</div>
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
