import { ChangeDetectionStrategy, Component } from '@angular/core';
import { contentDataRu } from '../../../../data/pages/contentData';
import {fadeAnimation} from "../../../../animations/fade.adnimation";

@Component({
  selector: 'app-materials-accounting',
  templateUrl: './install-program-materials-accounting.component.html',
  styleUrl: './install-program-materials-accounting.component.scss',
  animations: [fadeAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InstallProgramMaterialsAccountingComponent {
  data = contentDataRu.pharmacies.installProgramMaterialsAccounting;
}
