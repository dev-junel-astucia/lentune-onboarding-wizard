import {
  ChangeDetectorRef,
  Component,
  inject,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { SharedModule } from '../../shared/shared-module';
import { OnboardingTitles } from '../../shared/model/onboarding.model';
import { Steps } from '../../shared/model/stepper.model';
import { EmailSetupComponent } from '../email-setup/email-setup.component';
import { Store } from '@ngrx/store';
import { HideSkipStep, ShowSkipStep } from '../../state/onboarding';

@Component({
  selector: 'lentune-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [SharedModule, EmailSetupComponent],
  standalone: true,
})
export class DashboardComponent {
  @ViewChild('step1') step1!: TemplateRef<any>;
  @ViewChild('step2') step2!: TemplateRef<any>;
  @ViewChild('step3') step3!: TemplateRef<any>;
  @ViewChild('step4') step4!: TemplateRef<any>;
  @ViewChild('step5') step5!: TemplateRef<any>;

  #store = inject(Store);
  #cdr = inject(ChangeDetectorRef);
  stepper = [] as Steps[];
  isEmailConnected: boolean = false;
  emailConnected: string = '';

  email: string = ''; // This is just temporary and for visual only

  ngAfterViewInit() {
    this.stepper = [
      {
        title: `V-Onboarding ${OnboardingTitles.WELCOME}`,
        content: this.step1,
        hasBorder: false,
      },
      {
        title: `V-Onboarding ${OnboardingTitles.INTEGRATIONS}`,
        content: this.step2,
        hasBorder: true,
      },
      {
        title: `V-Onboarding ${OnboardingTitles.CONNECT_EMAIL}`,
        content: this.step3,
        hasBorder: true,
        canSkip: true,
      },
      {
        title: `V-Onboarding ${OnboardingTitles.PREFERENCES}`,
        content: this.step4,
        hasBorder: false,
      },
      {
        title: `V-Onboarding ${OnboardingTitles.COMPLETION}`,
        content: this.step5,
        hasBorder: false,
      },
    ];

    this.#cdr.detectChanges();
  }

  // This methods can add on the state management later, but we wont be doing that for the sake of this task
  connectOnMicrosoft() {
    this.isEmailConnected = true;
    this.emailConnected = 'Microsoft';
    this.email = 'email_address@microsoft.com';
    this.#store.dispatch(HideSkipStep());
  }

  connectOnGmail() {
    this.isEmailConnected = true;
    this.emailConnected = 'Gmail';
    this.email = 'email_address@gmail.com';
    this.#store.dispatch(HideSkipStep());
  }

  disconnectEmail() {
    this.isEmailConnected = false;
    this.emailConnected = '';
    this.#store.dispatch(ShowSkipStep());
  }
}
