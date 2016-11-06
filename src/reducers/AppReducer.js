import Immutable from 'seamless-immutable';
import { createReducer } from 'reduxsauce';

import Types from '../actions/Types';

export const INITIAL_STATE = Immutable({
  loaded: false,
});

const loaded = (state, action) => {
  return state.merge({
    loaded: true
  });
}

const ACTION_HANDLERS = {
  [Types.LOADED]: loaded,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
