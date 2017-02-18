// @flow
import type { Action } from 'types/Action';

export const REQUEST = 'REQUEST';
export const RECEIVE = 'RECEIVE';
export const CANCEL = 'CANCEL';

export const request = (): Action => ({
  type: REQUEST,
});

export const receive = (): Action => ({
  type: RECEIVE,
});

export const cancel = (): Action => ({
  type: CANCEL,
});
