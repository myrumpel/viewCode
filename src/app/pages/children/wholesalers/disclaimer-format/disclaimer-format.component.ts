import { ChangeDetectionStrategy, Component } from '@angular/core';
import { contentDataRu } from '../../../../data/pages/contentData';

@Component({
  selector: 'app-disclaimer-format',
  templateUrl: './disclaimer-format.component.html',
  styleUrl: './disclaimer-format.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisclaimerFormatComponent {
  displayedColumns: string[] = ['code', 'description'];
  data = contentDataRu.wholesalers.disclaimerFormat;
  dataSource = this.data.table;
}
