import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  template: `<button [@myTrigger]='state'>My button</button>`,
  styles: [],
  animations: [
    trigger('myTrigger', [
      state('small', style({
        transform: 'scale(1)'
      })),
      state('large', style({
        transform: 'scale(1.4)'
      }))
      //transition
    ])

  ]
})
export class AppComponent {
  state: string = "large";
  title = 'angular-animations';
}
