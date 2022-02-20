import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  template: `<button (click)='toggleState()'>My button</button>
  <ul>
  <li *ngFor="let item of items" [@myTrigger]='state'>{{ item }}</li>
  </ul>`,
  styleUrls: ['./app.component.css'],
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
      state('fadeIn', style({
        opacity: '1'
      })),
      // transition('small => large', animate('500ms ease-in')),
      // transition('large => small', animate('500ms ease-out'))
      //transition('* => *', animate('500ms ease-out'))
      transition('void => *', [style({
        opacity: '0', transform: 'translateY(20px)'
      }), animate ('500ms')])
    ])

  ]
})
export class AppComponent {
  state: string = "extra-large";
  title = 'angular-animations';
  items : string[] = [];


  toggleState() {
    this.items.push('another item');
    this.state = "fadeIn";
    //this.state = (this.state === 'small' ? 'large': 'small');
  }

}
