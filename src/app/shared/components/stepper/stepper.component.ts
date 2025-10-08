import { CommonModule } from '@angular/common';
import {
  Component,
  ContentChildren,
  QueryList,
  TemplateRef,
  Input,
  inject,
} from '@angular/core';
import { Store } from '@ngrx/store';
import {
  NextOnboardingStep,
  PreviousOnboardingStep,
  selectOnboardingStep,
  SkipOnboardingStep,
} from '../../../state/onboarding';
import { Steps } from '../../model/stepper.model';

@Component({
  selector: 'lentune-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  imports: [CommonModule],
  standalone: true,
})
export class StepperComponent {
  @ContentChildren(TemplateRef) stepTemplates!: QueryList<TemplateRef<any>>;
  @Input() steps: Steps[] = [];

  #store = inject(Store);
  currentStep = this.#store.selectSignal(selectOnboardingStep);

  nextStep() {
    this.#store.dispatch(NextOnboardingStep());
  }

  previousStep() {
    this.#store.dispatch(PreviousOnboardingStep());
  }

  skipStep() {
    this.#store.dispatch(SkipOnboardingStep());
  }

  showPrevious() {
    return this.currentStep() > 1 && this.currentStep() < this.steps.length;
  }

  displayTitle() {
    return this.steps[this.currentStep() - 1]?.title;
  }

  displayPrimaryBButtonText() {
    return this.currentStep() === this.steps.length
      ? "Let's Go!"
      : this.currentStep() === this.steps.length - 1
      ? 'Complete Setup'
      : 'Next';
  }

  hasBorder() {
    return this.steps[this.currentStep() - 1]?.hasBorder;
  }

  canSkip() {
    return this.steps[this.currentStep() - 1]?.canSkip;
  }
}
