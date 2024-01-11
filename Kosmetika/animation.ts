import { trigger, state, style, transition, animate } from '@angular/animations';

export const fadeInFromLeft = trigger('fadeInFromLeft', [
  state('void', style({ opacity: 0, transform: 'translateX(-50px)' })), // Initial state
  transition(':enter', [
    animate('0.5s ease', style({ opacity: 1, transform: 'translateX(0)' })),
  ]),
  transition(':leave', [
    animate('0.5s ease', style({ opacity: 0, transform: 'translateX(-50px)' })),
  ]),
]);