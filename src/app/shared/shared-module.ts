import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { ToggleSwitchComponent } from './components/toggle-switch/toggle-switch.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  imports: [
    CommonModule,
    NavbarComponent,
    StepperComponent,
    ToggleSwitchComponent,
    CardComponent,
  ],
  exports: [
    NavbarComponent,
    StepperComponent,
    ToggleSwitchComponent,
    CardComponent,
  ],
})
export class SharedModule {}
