import { ChangeDetectionStrategy, Component } from '@angular/core';
import { contentDataRu } from '../../../../data/pages/contentData';

@Component({
  selector: 'app-redistribution-application',
  templateUrl: './redistribution-application.component.html',
  styleUrl: './redistribution-application.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RedistributionApplicationComponent {
  data = contentDataRu.pharmacies.redistributionApplication;
}
