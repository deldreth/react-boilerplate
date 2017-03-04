import Types from './appTypes';

const loaded = (message) => ({
  type: Types.LOADED,
  message
});

export default {
  loaded
};
