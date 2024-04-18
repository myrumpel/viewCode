import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ParagraphComponent } from '../../../../components/ui/paragraph/paragraph.component';
import { contentDataRu } from '../../../../data/pages/contentData';
import {fadeAnimation} from "../../../../animations/fade.adnimation";

@Component({
  selector: 'section-description-wholesalers-accounting',
  templateUrl: './section-description-wholesalers.component.html',
  styleUrl: './section-description-wholesalers.component.scss',
  animations: [fadeAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionDescriptionWholesalersComponent {
  data = contentDataRu.wholesalers.description;
}
