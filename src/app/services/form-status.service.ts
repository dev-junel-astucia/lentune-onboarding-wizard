import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FormStatusService {
  formValid = signal<boolean>(true);

  setFormValid(value: boolean) {
    this.formValid.set(value);
  }
}
