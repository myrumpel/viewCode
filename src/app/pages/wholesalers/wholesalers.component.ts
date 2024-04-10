import { ChangeDetectionStrategy, Component } from '@angular/core';
import { wholesalersLinks } from '../../data/wholesalers-links';

@Component({
  selector: 'app-wholesalers',
  templateUrl: './wholesalers.component.html',
  styleUrl: './wholesalers.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WholesalersComponent {
  items = wholesalersLinks;
  protected readonly wholesalersLinks = wholesalersLinks;
}
