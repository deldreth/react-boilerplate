// @flow
import React from 'react';
import { connect } from 'react-redux';

import Posts from './posts';

type Props = {
  loaded: boolean
};

class App extends React.Component {
  props: Props;

  constructor ( props: Props ) {
    super( props );
  }

  render () {
    const { loaded } = this.props;

    if ( !loaded ) {
      return (
        <div>Loading...</div>
      );
    }

    return (
      <Posts />
    );
  }
}

const mapStateToProps = ( state ) => {
  return {
    loaded: state.app.loaded
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
