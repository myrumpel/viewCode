import { ChangeDetectionStrategy, Component } from '@angular/core';
import { contentDataRu } from '../../../../data/pages/contentData';
import {fadeAnimation} from "../../../../animations/fade.adnimation";

@Component({
  selector: 'app-processing-of-invoices',
  templateUrl: './processing-of-invoices.component.html',
  styleUrl: './processing-of-invoices.component.scss',
  animations: [fadeAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProcessingOfInvoicesComponent {
  data = contentDataRu.pharmacies.processingOfInvoices;
  dataSource = this.data.table;
  displayedColumns = ['code', 'description'];
}
