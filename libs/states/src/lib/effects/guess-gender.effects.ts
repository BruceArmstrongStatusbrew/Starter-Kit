import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GuessGenderActions } from '../actions';
import { exhaustMap, map, catchError, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GenderData } from '../reducers/guess-gender.reducer';

const GUESS_GENDER_URL = 'https://api.genderize.io?name=';

@Injectable()
export class GuessGenderEffects {
  private readonly actions$ = inject(Actions);

  private readonly htttp = inject(HttpClient);

  guessGender$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GuessGenderActions['[Core]GuessGenders']),
      exhaustMap(({ name }) =>
        this.htttp.get(GUESS_GENDER_URL + name).pipe(
          map((data: unknown) =>
            GuessGenderActions['[Core]GuessGendersSuccess']({
              data: data as GenderData,
            })
          ),
          catchError(() => of(GuessGenderActions['[Core]GuessGendersFailure']))
        )
      )
    )
  );

  guessGenderSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GuessGenderActions['[Core]GuessGendersSuccess']),
      exhaustMap((data) => {
        console.log('Data:', data);
        return of(data);
      })
    )
  );

  guessGenderFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GuessGenderActions['[Core]GuessGendersFailure']),
      exhaustMap((data) => {
        console.log('Data:', data);
        return of(data);
      })
    )
  );
}
