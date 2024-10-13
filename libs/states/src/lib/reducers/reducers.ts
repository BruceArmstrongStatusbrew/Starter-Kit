import { combineReducers } from '@ngrx/store';
import { guessGenderReducer } from './guess-gender.reducer';

export const reducers = combineReducers({
  history: guessGenderReducer,
});
