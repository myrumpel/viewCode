import { ChangeDetectionStrategy, Component } from '@angular/core';
import { contentDataRu } from '../../../../data/pages/contentData';

@Component({
  selector: 'app-running-program-with-keys',
  templateUrl: './running-program-with-keys.component.html',
  styleUrl: './running-program-with-keys.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RunningProgramWithKeysComponent {
  data = contentDataRu.pharmacies.runningProgramWithKeys;
}
