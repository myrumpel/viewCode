import { ChangeDetectionStrategy, Component } from '@angular/core';
import { contentDataRu } from '../../../../data/pages/contentData';
import {fadeAnimation} from "../../../../animations/fade.adnimation";

@Component({
  selector: 'app-reinstalling-the-program',
  templateUrl: './reinstalling-the-program.component.html',
  styleUrl: './reinstalling-the-program.component.scss',
  animations: [fadeAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReinstallingTheProgramComponent {
  data = contentDataRu.pharmacies.reinstallingTheProgram;
}
