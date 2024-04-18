import { ChangeDetectionStrategy, Component } from '@angular/core';
import { contentDataRu } from '../../../../data/pages/contentData';
import {fadeAnimation} from "../../../../animations/fade.adnimation";

@Component({
  selector: 'section-description-pharmacies-accounting',
  templateUrl: './section-description-pharmacies.component.html',
  styleUrl: './section-description-pharmacies.component.scss',
  animations: [fadeAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionDescriptionPharmaciesComponent {
  data = contentDataRu.pharmacies.sectionDescription;
}
