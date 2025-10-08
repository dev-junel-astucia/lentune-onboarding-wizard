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

@Component({
  selector: 'lentune-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [SharedModule],
  standalone: true,
})
export class DashboardComponent {
  @ViewChild('step1') step1!: TemplateRef<any>;
  @ViewChild('step2') step2!: TemplateRef<any>;
  @ViewChild('step3') step3!: TemplateRef<any>;
  @ViewChild('step4') step4!: TemplateRef<any>;
  @ViewChild('step5') step5!: TemplateRef<any>;

  #cdr = inject(ChangeDetectorRef);
  stepper = [] as Steps[];

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
}
