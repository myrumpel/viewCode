import { ChangeDetectionStrategy, Component } from '@angular/core';
import { contentDataRu } from '../../../../data/pages/contentData';
import {fadeAnimation} from "../../../../animations/fade.adnimation";

@Component({
  selector: 'app-auto-order',
  templateUrl: './auto-order.component.html',
  styleUrl: './auto-order.component.scss',
  animations: [fadeAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutoOrderComponent {
  data = contentDataRu.pharmacies.autoOrder;
  dataSource = this.data.content.element_16.table;
  displayedColumns = ['code', 'columnName', 'description'];
  dataSourceSecondTable = this.data.content.element_17.table;
}
