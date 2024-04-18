import { ChangeDetectionStrategy, Component } from '@angular/core';
import { contentDataRu } from '../../../../data/pages/contentData';
import {fadeAnimation} from "../../../../animations/fade.adnimation";

@Component({
  selector: 'app-disclaimer-format',
  templateUrl: './disclaimer-format.component.html',
  styleUrl: './disclaimer-format.component.scss',
  animations: [fadeAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisclaimerFormatComponent {
  displayedColumns: string[] = ['name','code', 'description'];
  data = contentDataRu.wholesalers.disclaimerFormat;
  dataSource = this.data.table;
}
