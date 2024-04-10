import { ChangeDetectionStrategy, Component } from '@angular/core';
import { contentDataRu } from '../../../../data/pages/contentData';

@Component({
  selector: 'app-application-format',
  templateUrl: './application-format.component.html',
  styleUrl: './application-format.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApplicationFormatComponent {
  displayedColumns: string[] = ['code', 'description'];
  data = contentDataRu.wholesalers.applicationFormat;
  dataSource = this.data.table;
}
