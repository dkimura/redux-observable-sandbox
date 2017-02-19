// @flow
import { combineEpics } from 'redux-observable';
import { REQUEST, CANCEL, receive } from 'ducks/actions';

import { Observable } from 'rxjs';

export const fetch = (action$: any) =>
  action$
    .ofType(REQUEST)
    .mergeMap(() =>
      Observable.of(receive())
        .delay(3000)
        .takeUntil(action$.ofType(CANCEL)),
    )
  ;

export default combineEpics(
  fetch,
);
