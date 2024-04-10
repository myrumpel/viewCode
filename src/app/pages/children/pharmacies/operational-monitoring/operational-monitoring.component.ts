import { ChangeDetectionStrategy, Component } from '@angular/core';
import { contentDataRu } from '../../../../data/pages/contentData';

@Component({
  selector: 'app-operational-monitoring',
  templateUrl: './operational-monitoring.component.html',
  styleUrl: './operational-monitoring.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OperationalMonitoringComponent {
  data = contentDataRu.pharmacies.operationalMonitoring;
}
