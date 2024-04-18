import { ChangeDetectionStrategy, Component } from '@angular/core';
import { contentDataRu } from '../../data/pages/contentData';
import {fadeAnimation} from "../../animations/fade.adnimation";

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.scss',
  animations: [fadeAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PartnersComponent {
  data = contentDataRu.partnersPage;
  contacts = this.data.contacts;
}
