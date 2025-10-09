import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { injectEmailSetupForm } from './email-setup.form';
import { CommonModule } from '@angular/common';
import { FormStatusService } from '../../services/form-status.service';

@Component({
  selector: 'lentune-email-setup',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './email-setup.component.html',
  styleUrl: './email-setup.component.scss',
  standalone: true,
})
export class EmailSetupComponent implements OnInit, OnDestroy {
  #formStatusService = inject(FormStatusService);

  readonly form = injectEmailSetupForm();

  ngOnInit() {
    this.form.updateValueAndValidity();

    this.#formStatusService.setFormValid(this.form.valid);

    this.form.statusChanges.subscribe((status) => {
      this.#formStatusService.setFormValid(status === 'VALID');
    });
  }

  ngOnDestroy() {
    // Reset subscription state when leaving
    this.#formStatusService.setFormValid(true);
  }
}
