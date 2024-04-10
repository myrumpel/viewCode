import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { UntilDestroy } from '@ngneat/until-destroy';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  isPopupDidClose = new BehaviorSubject(false);
  initState = new BehaviorSubject('static');
  prevScroll = 0;

  get didClose(): Observable<boolean> {
    return this.isPopupDidClose.asObservable();
  }
  set didClose(value: boolean) {
    this.isPopupDidClose.next(value);
  }

  handleScroll = () => {
    if (window.scrollY > 700) {
      if (this.initState.getValue() === 'static') {
        this.initState.next('quickHide');
      }
      this.didClose.subscribe((val) => {
        if (val) {
          this.didClose = false;
          this.initState.next('visible');
        }
      });

      let scroll = window.scrollY;

      if (scroll > this.prevScroll) {
        this.prevScroll = scroll;
        this.initState.next('hidden');
      } else if (this.initState.getValue() === 'quickHide') {
        return;
      } else {
        this.prevScroll = scroll;
        this.initState.next('visible');
      }
    } else {
      this.initState.next('static');
    }
    return;
  };
}
