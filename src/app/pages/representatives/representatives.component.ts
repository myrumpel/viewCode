import { ChangeDetectionStrategy, Component } from '@angular/core';
import { representativesLinks } from '../../data/representatives-links';

@Component({
  selector: 'app-representatives',
  templateUrl: './representatives.component.html',
  styleUrl: './representatives.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RepresentativesComponent {
  items = representativesLinks;
  protected readonly representativesLinks = representativesLinks;
}
