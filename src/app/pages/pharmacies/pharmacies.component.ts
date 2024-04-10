import { ChangeDetectionStrategy, Component } from '@angular/core';
import { pharmaciesLinks } from '../../data/pharmacies-links';

@Component({
  selector: 'app-pharmacies',
  templateUrl: './pharmacies.component.html',
  styleUrl: './pharmacies.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PharmaciesComponent {
  items = pharmaciesLinks;
  protected readonly pharmaciesLinks = pharmaciesLinks;
}
