import { AfterViewInit, Component } from '@angular/core';

import { DarkModeService } from './services/dark-mode.service';
import { ScrollViewerService } from './services/scroll-viewer.service';
import { ScrollService } from './services/scroll.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  title = 'СКЛИТ';
  protected isDark = this.DarkMode.darkMode$;
  protected hideBtn = true;

  constructor(
    protected DarkMode: DarkModeService,
    private scrollViewer: ScrollViewerService,
    private scrollService: ScrollService
  ) {}

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
    this.scrollService.prevScroll = 0;
  }
  ngAfterViewInit(): void {
    this.scrollViewer.event$.subscribe((ev) => {
      this.hideBtn = window.scrollY < 700;
    });
  }
}
