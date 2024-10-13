import { createReducer, on } from '@ngrx/store';
import { GuessGenderActions } from '../actions/guess-gender.actions';

export const guessGenderFeatureKey = 'guessGender';

export interface GenderData {
  name: string;
  gender: string;
  probability: number;
  count: string;
}

export interface State {
  data: GenderData[];
  track: boolean;
}

export const initialState: State = {
  data: [],
  track: false,
};

export const guessGenderReducer = createReducer(
  initialState,
  on(GuessGenderActions['[Core]GuessGendersSuccess'], (state) => {
    return {
      ...state,
      track: !state.track,
      data: !state.track ? [] : state.data,
    };
  }),
  on(GuessGenderActions['[Core]GuessGendersSuccess'], (state, { data }) => {
    return {
      ...state,
      data: state.track ? [...state.data, data] : state.data,
    };
  })
);
