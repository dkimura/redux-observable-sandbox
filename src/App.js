// @flow
import React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import type { Dispatch } from 'types/Action';

type Props = {
  dispatch: Dispatch,
  isLoading: boolean,
}

const App = ({ dispatch, isLoading }: Props) =>
  <div>
    <button disabled={isLoading} onClick={() => dispatch({ type: 'REQUEST' })}>
      REQUEST
    </button>

    <button disabled={!isLoading} onClick={() => dispatch({ type: 'CANCEL' })}>
      CANCEL
    </button>
  </div>;

export default compose(
  connect(({ isLoading }) => ({
    isLoading,
  })),
)(App);
