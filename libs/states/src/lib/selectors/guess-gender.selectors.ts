import { createSelector } from '@ngrx/store';
import { State } from '../reducers/guess-gender.reducer';

export const selectFeature = (state: State) => state;

export const history = createSelector(
  selectFeature,
  (state: State) => state.history
);

export const trackHistory = createSelector(
  selectFeature,
  (state: State) => state.trackHistory
);
