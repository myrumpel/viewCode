import { ChangeDetectionStrategy, Component } from '@angular/core';
import { contentDataRu } from '../../../../data/pages/contentData';
import {fadeAnimation} from "../../../../animations/fade.adnimation";

@Component({
  selector: 'app-information-exchange',
  templateUrl: './information-exchange.component.html',
  styleUrl: './information-exchange.component.scss',
  animations: [fadeAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InformationExchangeComponent {
  data = contentDataRu.wholesalers.informationExchange;
}
