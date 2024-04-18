import { ChangeDetectionStrategy, Component } from '@angular/core';
import { contentDataRu } from '../../../../data/pages/contentData';
import {fadeAnimation} from "../../../../animations/fade.adnimation";

@Component({
  selector: 'app-redistribution-application',
  templateUrl: './redistribution-application.component.html',
  styleUrl: './redistribution-application.component.scss',
  animations: [fadeAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RedistributionApplicationComponent {
  data = contentDataRu.pharmacies.redistributionApplication;
}
