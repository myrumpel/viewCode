import { ChangeDetectionStrategy, Component } from '@angular/core';
import { contentDataRu } from '../../data/pages/contentData';

@Component({
  selector: 'app-agreement',
  templateUrl: './agreement.component.html',
  styleUrl: './agreement.component.scss',
  changeDetection: ChangeDetectionStrategy['OnPush'],
})
export class AgreementComponent {
  data = contentDataRu.agreement;
}
