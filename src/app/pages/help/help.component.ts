import { ChangeDetectionStrategy, Component } from '@angular/core';
import { contentDataRu } from '../../data/pages/contentData';
import {fadeAnimation} from "../../animations/fade.adnimation";

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrl: './help.component.scss',
  animations: [fadeAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelpComponent {
  data = contentDataRu.help;
}
