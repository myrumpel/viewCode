import { ChangeDetectionStrategy, Component } from '@angular/core';
import { contentDataRu } from '../../../../data/pages/contentData';

@Component({
  selector: 'app-materials-accounting',
  templateUrl: './materials-accounting.component.html',
  styleUrl: './materials-accounting.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialsAccountingComponent {
  data = contentDataRu.pharmacies.materialsAccounting;
}
