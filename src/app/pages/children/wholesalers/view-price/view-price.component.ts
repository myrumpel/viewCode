import { ChangeDetectionStrategy, Component } from '@angular/core';
import { contentDataRu } from '../../../../data/pages/contentData';
import {fadeAnimation} from "../../../../animations/fade.adnimation";

@Component({
  selector: 'app-view-price',
  templateUrl: './view-price.component.html',
  styleUrl: './view-price.component.scss',
  animations: [fadeAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewPriceComponent {
  data = contentDataRu.shared.viewPrice;
}
