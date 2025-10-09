import { createSelector } from '@ngrx/store';

export const selectOnboardingState = (state: any) => state.onboarding;

export const selectOnboardingStep = createSelector(
  selectOnboardingState,
  (state) => state.step || 0
);

export const selectOnboardingTitle = createSelector(
  selectOnboardingState,
  (state) => state.title || ''
);

export const selectOnboardingSkipped = createSelector(
  selectOnboardingState,
  (state) => state.skipped || []
);

export const isSkipHidden = createSelector(
  selectOnboardingState,
  (state) => state.hideSkip
);
