import { createReducer, on } from '@ngrx/store';
import {
  NextOnboardingStep,
  PreviousOnboardingStep,
  SkipOnboardingStep,
  SetOnboardingStep,
  ResetOnboarding,
  AddSkippedStep,
  RemoveSkippedStep,
  ShowSkipStep,
  HideSkipStep,
} from './onboarding.action';
import { OnboardingTitles } from '../../shared/model/onboarding.model';

export const OnboardingTitlesArr = Object.values(OnboardingTitles);

export const initialOnboardingState = {
  title: OnboardingTitlesArr[0],
  step: 1,
  skipped: [] as number[],
  hideSkip: false,
};

function moveToStep(state: any, toSkip = false) {
  const nextStep = state.step + 1;

  if (nextStep > OnboardingTitlesArr.length) {
    return state;
  }
  return {
    ...state,
    title: OnboardingTitlesArr[nextStep - 1],
    step: nextStep,
    skipped: [...state.skipped, toSkip ? state.step : []].flat(),
  };
}

export const onboardingReducer = createReducer(
  initialOnboardingState,
  on(NextOnboardingStep, (state): any => moveToStep(state)),
  on(PreviousOnboardingStep, (state): any => {
    const prevStep = state.step - 1;
    if (prevStep < 1) {
      return state;
    }
    return {
      ...state,
      title: OnboardingTitlesArr[prevStep - 1],
      step: prevStep,
    };
  }),
  on(SkipOnboardingStep, (state): any => moveToStep(state, true)),
  on(SetOnboardingStep, (state, { step }): any => {
    if (step < 0 || step >= OnboardingTitlesArr.length) {
      return state;
    }
    return {
      ...state,
      title: OnboardingTitlesArr[step - 1],
      step,
    };
  }),
  on(AddSkippedStep, (state, { step }): any => ({
    ...state,
    skipped: state.skipped.includes(step)
      ? state.skipped
      : [...state.skipped, step - 1],
  })),
  on(RemoveSkippedStep, (state, { step }): any => ({
    ...state,
    skipped: state.skipped.includes(step)
      ? state.skipped.filter((s) => s !== step)
      : [...state.skipped],
  })),
  on(ShowSkipStep, (state): any => ({
    ...state,
    hideSkip: false,
  })),
  on(HideSkipStep, (state): any => ({
    ...state,
    hideSkip: true,
  })),
  on(ResetOnboarding, (): any => ({
    ...initialOnboardingState,
  }))
);
