import { inject } from '@angular/core';
import {
  NonNullableFormBuilder,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { EmailSetup } from '../../shared/model/email-setup.model';

export type EmailSetupForm = ReturnType<typeof injectEmailSetupForm>;

export function injectEmailSetupForm() {
  const fb = inject(NonNullableFormBuilder);

  const initialValues: EmailSetup = {
    pullInvoiceFolder: '',
    storeInvoiceFolder: '',
    failedInvoiceFolder: '',
  };

  const controlField = <K extends keyof EmailSetup>(
    fieldName: K,
    validators?: ValidatorFn | ValidatorFn[]
  ) => fb.control<EmailSetup[K]>(initialValues[fieldName], validators);

  const { required } = Validators;

  return fb.group(
    {
      pullInvoiceFolder: controlField('pullInvoiceFolder', [required]),
      storeInvoiceFolder: controlField('storeInvoiceFolder', [required]),
      failedInvoiceFolder: controlField('failedInvoiceFolder', [required]),
    },
    { updateOn: 'change' }
  );
}
