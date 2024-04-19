import { ChangeDetectionStrategy, Component } from '@angular/core';
import { contentDataRu } from '../../../../data/pages/contentData';
import {fadeAnimation} from "../../../../animations/fade.adnimation";

@Component({
  selector: 'view-price-pharmacies',
  templateUrl: './view-price-pharmacies.component.html',
  styleUrl: './view-price-pharmacies.component.scss',
  animations: [fadeAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewPricePharmaciesComponent {
  data = contentDataRu.pharmacies.viewPricePharmacies;
}
