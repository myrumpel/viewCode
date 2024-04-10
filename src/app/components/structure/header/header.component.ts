import { ChangeDetectionStrategy, Component, HostListener, OnInit } from '@angular/core';
import { DarkModeService } from '../../../services/dark-mode.service';
import { menuLinks } from '../../../data/menuLinks';
import { headerAnimation } from '../../../animations/header.animation';
import { ScrollService } from '../../../services/scroll.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [headerAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  isDark = this.DarkMode.darkMode$;
  isPopupActive: boolean = false;
  pagePosition: number = 0;
  mediaQuery = window.matchMedia('(max-width: 900px)');

  scrollListener = this.scrollService.handleScroll;

  constructor(
    private DarkMode: DarkModeService,
    public scrollService: ScrollService
  ) {}
  ngOnInit(): void {
    this.handleResizeWindow(this.mediaQuery);
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.handleResizeWindow(this.mediaQuery);
  }
  handleResizeWindow(media: MediaQueryList) {
    if (!media.matches) {
      window.removeEventListener('scroll', this.scrollListener);
    } else {
      this.scrollService.initState.next('static');
      window.addEventListener('scroll', this.scrollListener);
    }
  }

  click(): void {
    this.DarkMode.toggleMode();
  }
  togglePopup() {
    if (this.isPopupActive) {
      this.closePopup(this.pagePosition);
    } else {
      this.pagePosition = window.scrollY;
      this.openPopup();
    }
  }
  openPopup(): void {
    this.isPopupActive = true;
    document.body.classList.add('blockScroll');
  }

  closePopup(pagePosition?: number): void {
    this.isPopupActive = false;
    document.body.classList.remove('blockScroll');
    window.scrollTo({
      top: pagePosition,
      behavior: 'auto',
    });
    this.scrollService.didClose = true;
  }

  protected readonly menuLinks = menuLinks;
}
