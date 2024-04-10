import { ChangeDetectionStrategy, Component } from '@angular/core';
import { contentDataRu } from '../../../../data/pages/contentData';

@Component({
  selector: 'app-promotion-discount-bonus',
  templateUrl: './promotion-discount-bonus.component.html',
  styleUrl: './promotion-discount-bonus.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PromotionDiscountBonusComponent {
  data = contentDataRu.wholesalers.promotionDiscountBonus;
}
