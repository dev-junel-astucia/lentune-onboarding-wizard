export enum OnboardingTitles {
  WELCOME = 'Welcome Card',
  INTEGRATIONS = 'Integrations',
  CONNECT_EMAIL = 'Connect Your Email',
  PREFERENCES = 'Preferences',
  COMPLETION = `You're All Set`,
}

export type OnboardingState = {
  title: OnboardingTitles;
  step: number;
  skipped: number[];
};
