import { Injectable } from '@angular/core';
import { fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollViewerService {
  public event$ = fromEvent(window, 'scroll');
}
