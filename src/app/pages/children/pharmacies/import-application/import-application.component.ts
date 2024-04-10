import { ChangeDetectionStrategy, Component } from '@angular/core';
import { contentDataRu } from '../../../../data/pages/contentData';

@Component({
  selector: 'app-import-application',
  templateUrl: './import-application.component.html',
  styleUrl: './import-application.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImportApplicationComponent {
  data = contentDataRu.pharmacies.importApplication;
}
