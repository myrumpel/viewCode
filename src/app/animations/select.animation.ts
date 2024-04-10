import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const selectAnimation = trigger('scrollSelect', [
  state(
    'visible',
    style({
      position: 'fixed',
      top: '130px',
      left: '16px',
      right: '16px',
      zIndex: '5',
    }),
  ),
  state(
    'hidden',
    style({
      position: 'fixed',
      top: '-100px',
      left: '64px',
      right: '64px',
    }),
  ),
  state(
    'quickHide',
    style({
      position: 'fixed',
      top: '-100px',
      left: '64px',
      right: '64px',
    }),
  ),
  state(
    'static',
    style({
      position: 'relative',
      top: '25px',
      left: '',
      right: '',
    }),
  ),
  transition('visible => hidden', [animate('300ms ease-in')]),
  transition('hidden => visible', [animate('300ms ease-out')]),
  transition('quickHide => hidden', []),
]);
