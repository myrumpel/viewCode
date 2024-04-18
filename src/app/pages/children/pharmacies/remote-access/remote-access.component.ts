import { ChangeDetectionStrategy, Component } from '@angular/core';
import { contentDataRu } from '../../../../data/pages/contentData';
import {fadeAnimation} from "../../../../animations/fade.adnimation";

@Component({
  selector: 'app-remote-access',
  templateUrl: './remote-access.component.html',
  styleUrl: './remote-access.component.scss',
  animations: [fadeAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RemoteAccessComponent {
  data = contentDataRu.pharmacies.remoteAccess;
}
