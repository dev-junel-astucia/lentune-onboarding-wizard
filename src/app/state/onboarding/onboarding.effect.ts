import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { concatMap, withLatestFrom, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { OnboardingActionTypes } from './onboarding.enum';
import { RemoveSkippedStep } from './onboarding.action';
import { selectOnboardingStep } from './onboarding.selector';

@Injectable()
export class OnboardingEffect {
  readonly #store = inject(Store);
  readonly #actions = inject(Actions);

  removeSkippedStepEffect$ = createEffect(
    () =>
      this.#actions.pipe(
        ofType(OnboardingActionTypes.PREVIOUS_ONBOARDING_STEP),
        concatMap((action) =>
          of(action).pipe(
            withLatestFrom(this.#store.select(selectOnboardingStep))
          )
        ),
        tap(([, currentStep]) => {
          this.#store.dispatch(
            RemoveSkippedStep({
              step: currentStep,
            })
          );
        })
      ),
    { dispatch: false }
  );
}
