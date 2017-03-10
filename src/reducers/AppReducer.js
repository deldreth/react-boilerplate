// @flow
import { createReducer } from 'reduxsauce';

type State = {
  loaded: bool
};

import { Types } from '../actions';

export const INITIAL_STATE = {
  loaded: false,
};

const ACTION_HANDLERS = {
  [ Types.LOADED ]: ( state: State = INITIAL_STATE, action: Object ): Object =>
    Object.assign( {}, state, {
      loaded: true
    } )
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
