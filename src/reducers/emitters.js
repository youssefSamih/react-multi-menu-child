/**
 * @file reducers/emitters.js
 * @author H.Alper Tuna <halpertuna@gmail.com>
 * Date: 16.12.2016
 */

const emitters = (state = {}, action) => {
  switch (action.type) {
    case 'EMIT_SELECTED': {
      if (state.emitSelected) {
        state.emitSelected(action.event);
      }
      return state;
    }
    case 'UPDATE_LISTENER': {
      return { ...state, emitSelected: action.listener };
    }
    default: {
      return state;
    }
  }
};

const multiEmitters = (state = {}, action) => {
  if (typeof action.reduxUid === 'undefined') return state;

  const { reduxUid } = action;
  const newState = { ...state };
  newState[reduxUid] = emitters(state[reduxUid], action);
  return newState;
};

export default multiEmitters;
