import { ChangeDetectionStrategy, Component } from '@angular/core';
import { contentDataRu } from '../../../../data/pages/contentData';
import {fadeAnimation} from "../../../../animations/fade.adnimation";

@Component({
  selector: 'app-running-program-with-keys',
  templateUrl: './running-program-with-keys.component.html',
  styleUrl: './running-program-with-keys.component.scss',
  animations: [fadeAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RunningProgramWithKeysComponent {
  data = contentDataRu.pharmacies.runningProgramWithKeys;
}
