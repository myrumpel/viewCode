import { ChangeDetectionStrategy, Component } from '@angular/core';
import { contentDataRu } from '../../../../data/pages/contentData';
import {fadeAnimation} from "../../../../animations/fade.adnimation";

@Component({
  selector: 'app-operational-monitoring',
  templateUrl: './operational-monitoring.component.html',
  styleUrl: './operational-monitoring.component.scss',
  animations: [fadeAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OperationalMonitoringComponent {
  data = contentDataRu.pharmacies.operationalMonitoring;
}
