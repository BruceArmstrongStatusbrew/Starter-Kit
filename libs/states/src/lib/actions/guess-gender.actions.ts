import { createActionGroup, props, emptyProps } from '@ngrx/store';
import { GenderData } from '../reducers/guess-gender.reducer';

export const GuessGenderActions = createActionGroup({
  source: 'GuessGender',
  events: {
    '[Core] GuessGenders': props<{ name: string }>(),
    '[Core] GuessGenders Success': props<{
      data: GenderData;
    }>(),
    '[Core] GuessGenders Failure': props<{ error: unknown }>(),
    '[Core] TrackHistory': emptyProps(),
  },
});
