import { ChangeDetectionStrategy, Component } from '@angular/core';
import { contentDataRu } from '../../data/pages/contentData';
import {fadeAnimation} from "../../animations/fade.adnimation";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [fadeAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  data = contentDataRu.homePage;
}
