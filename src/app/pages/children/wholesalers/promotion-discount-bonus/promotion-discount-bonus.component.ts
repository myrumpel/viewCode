import { ChangeDetectionStrategy, Component } from '@angular/core';
import { contentDataRu } from '../../../../data/pages/contentData';
import {fadeAnimation} from "../../../../animations/fade.adnimation";

@Component({
  selector: 'app-promotion-discount-bonus',
  templateUrl: './promotion-discount-bonus.component.html',
  styleUrl: './promotion-discount-bonus.component.scss',
  animations: [fadeAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PromotionDiscountBonusComponent {
  data = contentDataRu.wholesalers.promotionDiscountBonus;
}
