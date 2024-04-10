import { Component, Input } from '@angular/core';
import { NgSwitch, NgSwitchCase, NgSwitchDefault, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrl: './headline.component.scss',
  standalone: true,
  imports: [NgSwitchCase, NgSwitch, NgSwitchDefault, NgTemplateOutlet],
})
export class HeadlineComponent {
  @Input('grade') grade!: number;
}
