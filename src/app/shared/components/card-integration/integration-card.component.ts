import { Component, Input } from '@angular/core';
import { SharedModule } from '../../shared-module';

@Component({
  selector: 'lentune-integration-card',
  templateUrl: './integration-card.component.html',
  styleUrl: './integration-card.component.scss',
  imports: [SharedModule],
  standalone: true,
})
export class IntegrationCardComponent {
  @Input() icon!: string;
  @Input() header!: string;
  @Input() description!: string;
  @Input() link!: string;
}
