import { ChangeDetectionStrategy, Component } from '@angular/core';
import { contentDataRu } from '../../../../data/pages/contentData';

@Component({
  selector: 'app-remote-access',
  templateUrl: './remote-access.component.html',
  styleUrl: './remote-access.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RemoteAccessComponent {
  data = contentDataRu.pharmacies.remoteAccess;
}
