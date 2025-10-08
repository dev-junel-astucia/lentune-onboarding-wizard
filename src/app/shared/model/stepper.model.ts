import { TemplateRef } from '@angular/core';

export type Steps = {
  title: string;
  content: TemplateRef<any>;
  hasBorder: boolean;
  canSkip?: boolean;
};
