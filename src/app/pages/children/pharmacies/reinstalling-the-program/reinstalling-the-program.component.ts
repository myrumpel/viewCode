import { ChangeDetectionStrategy, Component } from '@angular/core';
import { contentDataRu } from '../../../../data/pages/contentData';

@Component({
  selector: 'app-reinstalling-the-program',
  templateUrl: './reinstalling-the-program.component.html',
  styleUrl: './reinstalling-the-program.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReinstallingTheProgramComponent {
  data = contentDataRu.pharmacies.reinstallingTheProgram;
}
