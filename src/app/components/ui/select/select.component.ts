import { ChangeDetectorRef, Component, HostListener, Input, OnInit } from '@angular/core';
import { sidebarLinks } from '../../../models/sidebarLinks';
import { selectAnimation } from '../../../animations/select.animation';
import { ScrollService } from '../../../services/scroll.service';
import { AsyncPipe, NgClass, NgForOf } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
  animations: [selectAnimation],
  imports: [NgClass, MatIcon, NgForOf, RouterLink, RouterLinkActive, AsyncPipe],
  standalone: true,
})
export class SelectComponent implements OnInit {
  @Input('linksArray') public linksArray!: sidebarLinks[];
  @Input('selectStartText') public selectStartText: string = '';
  selectIsActive: boolean = false;
  selectText: string = '';

  constructor(
    protected scrollService: ScrollService,
    private cdr: ChangeDetectorRef
  ) {}

  @HostListener('window:click', ['$event'])
  onWindowClick($event: MouseEvent) {
    const target = $event.target as HTMLElement;
    if (!target.closest('.select_wrapper') && this.selectIsActive) {
      this.toggleSelect();
    }
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.selectIsActive) {
      this.toggleSelect();
    }
  }
  toggleSelect() {
    this.selectIsActive = !this.selectIsActive;
  }
  itemClick($event: MouseEvent) {
    this.selectIsActive = false;
    this.selectText = ($event.target as HTMLElement).innerText;
  }

  ngOnInit(): void {
    this.selectText = this.selectStartText;
  }
}
