import { ChangeDetectionStrategy, Component } from '@angular/core';
import { contentDataRu } from '../../../../data/pages/contentData';
import {fadeAnimation} from "../../../../animations/fade.adnimation";

@Component({
  selector: 'app-price-list-format',
  templateUrl: './price-list-format.component.html',
  styleUrl: './price-list-format.component.scss',
  animations: [fadeAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriceListFormatComponent {
  displayedColumns: string[] = ['code', 'description'];
  data = contentDataRu.wholesalers.priceListFormat;
  dataSource = this.data.table;
}
