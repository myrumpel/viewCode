import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  darkMode$ = new BehaviorSubject<boolean>(localStorage.getItem('dark') === '1');

  toggleMode(): void {
    if (this.darkMode$.value) {
      this.darkMode$.next(false);
      localStorage.setItem('dark', '0');
    } else {
      this.darkMode$.next(true);
      localStorage.setItem('dark', '1');
    }
  }
}
