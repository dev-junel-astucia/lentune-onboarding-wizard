import { createAction, props } from '@ngrx/store';
import { OnboardingActionTypes } from './onboarding.enum';

export const NextOnboardingStep = createAction(
  OnboardingActionTypes.NEXT_ONBOARDING_STEP
);
export const PreviousOnboardingStep = createAction(
  OnboardingActionTypes.PREVIOUS_ONBOARDING_STEP
);
export const SkipOnboardingStep = createAction(
  OnboardingActionTypes.SKIP_ONBOARDING_STEP
);
export const SetOnboardingStep = createAction(
  OnboardingActionTypes.SET_ONBOARDING_STEP,
  props<{ step: number }>()
);
export const AddSkippedStep = createAction(
  OnboardingActionTypes.ADD_SKIPPED_STEP,
  props<{ step: number }>()
);
export const RemoveSkippedStep = createAction(
  OnboardingActionTypes.REMOVE_SKIPPED_STEP,
  props<{ step: number }>()
);
export const ResetOnboarding = createAction(
  OnboardingActionTypes.RESET_ONBOARDING
);
