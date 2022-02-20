import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  template: `<button [@myTrigger]='state' (click)='toggleState()'>My button</button>`,
  styles: [],
  animations: [
    trigger('myTrigger', [
      state('small', style({
        transform: 'scale(1)'
      })),
      state('large', style({
        transform: 'scale(1.4)'
      })),
      state('extra-large', style({
        transform: 'scale(2)'
      })),
      // transition('small => large', animate('500ms ease-in')),
      // transition('large => small', animate('500ms ease-out'))
      transition('* => *', animate('500ms ease-out'))
    ])

  ]
})
export class AppComponent {
  state: string = "extra-large";
  title = 'angular-animations';
  toggleState() {
    this.state = (this.state === 'small' ? 'large': 'small');
  }

}
