import { ChangeDetectionStrategy, Component } from '@angular/core';
import { contentDataRu } from '../../../../data/pages/contentData';
import {fadeAnimation} from "../../../../animations/fade.adnimation";

@Component({
  selector: 'app-individual-reports',
  templateUrl: './individual-reports.component.html',
  styleUrl: './individual-reports.component.scss',
  animations: [fadeAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndividualReportsComponent {
  data = contentDataRu.pharmacies.individualReports;
}
