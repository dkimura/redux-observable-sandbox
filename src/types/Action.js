// @flow

export type Action =
  { type: 'REQUEST' } |
  { type: 'RECEIVE' } |
  { type: 'CANCEL' }

export type Dispatch = (action: Action) => any;
