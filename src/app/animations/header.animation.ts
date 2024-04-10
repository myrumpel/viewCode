import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const headerAnimation = trigger('scrollHeader', [
  state(
    'visible',
    style({
      position: 'fixed',
      top: '0',
      left: '16px',
      right: '16px',
      zIndex: '10',
    }),
  ),
  state(
    'hidden',
    style({
      position: 'fixed',
      top: '-100px',
      left: '32px',
      right: '32px',
    }),
  ),
  state(
    'quickHide',
    style({
      position: 'fixed',
      top: '-100px',
      left: '32px',
      right: '32px',
    }),
  ),
  state(
    'static',
    style({
      position: 'absolute',
      top: '0',
      left: '16px',
      right: '16px',
    }),
  ),
  transition('visible => hidden', [animate('200ms ease-in')]),
  transition('hidden => visible', [animate('200ms ease-out')]),
  transition('quickHide => hidden', []),
]);
