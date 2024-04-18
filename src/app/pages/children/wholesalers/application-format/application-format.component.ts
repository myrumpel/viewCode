import { ChangeDetectionStrategy, Component } from '@angular/core';
import { contentDataRu } from '../../../../data/pages/contentData';
import {fadeAnimation} from "../../../../animations/fade.adnimation";

@Component({
  selector: 'app-application-format',
  templateUrl: './application-format.component.html',
  styleUrl: './application-format.component.scss',
  animations: [fadeAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApplicationFormatComponent {
  displayedColumns: string[] = ['code', 'description'];
  data = contentDataRu.wholesalers.applicationFormat;
  dataSource = this.data.table;
}
