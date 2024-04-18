import { ChangeDetectionStrategy, Component } from '@angular/core';
import { contentDataRu } from '../../../../data/pages/contentData';
import {fadeAnimation} from "../../../../animations/fade.adnimation";

@Component({
  selector: 'app-materials-accounting',
  templateUrl: './materials-accounting.component.html',
  styleUrl: './materials-accounting.component.scss',
  animations: [fadeAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialsAccountingComponent {
  data = contentDataRu.pharmacies.materialsAccounting;
}
