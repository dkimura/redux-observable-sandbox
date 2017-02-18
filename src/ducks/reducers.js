// @flow
import type { Action } from 'types/Action';
import { REQUEST, RECEIVE, CANCEL } from 'ducks/actions';

type State = {
  isLoading: boolean
}

export default (state: State = { isLoading: false }, action: Action) => {
  switch (action.type) {
    case REQUEST:
      return { isLoading: true };
    case RECEIVE:
      return { isLoading: false };
    case CANCEL:
      return { isLoading: false };
    default:
      return state;
  }
};
