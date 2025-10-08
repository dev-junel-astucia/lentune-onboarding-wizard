import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectOnboardingTitle } from '../../../state/onboarding';

@Component({
  selector: 'lentune-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  standalone: true,
})
export class NavbarComponent {
  #store = inject(Store);
  title = this.#store.selectSignal(selectOnboardingTitle);
}
