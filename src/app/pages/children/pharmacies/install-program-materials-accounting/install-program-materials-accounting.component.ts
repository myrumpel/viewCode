import { ChangeDetectionStrategy, Component } from '@angular/core';
import { contentDataRu } from '../../../../data/pages/contentData';

@Component({
  selector: 'app-materials-accounting',
  templateUrl: './install-program-materials-accounting.component.html',
  styleUrl: './install-program-materials-accounting.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InstallProgramMaterialsAccountingComponent {
  data = contentDataRu.pharmacies.installProgramMaterialsAccounting;
}
