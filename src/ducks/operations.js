// @flow
import { combineEpics } from 'redux-observable';
import { REQUEST, CANCEL, receive } from 'ducks/actions';

import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/takeUntil';

export const fetch = (action$: any) =>
  action$
    .ofType(REQUEST)
    .mergeMap(() =>
      of(receive())
        .delay(3000)
        .takeUntil(action$.ofType(CANCEL)),
    )
  ;

export default combineEpics(
  fetch,
);
