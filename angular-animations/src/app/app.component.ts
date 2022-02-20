import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations'

@Component({
  selector: 'app-root',
  template: `<button [@myTrigger]='state'>My button</button>`,
  styles: [],
  animations: [
    trigger('myTrigger', [
      //state()
      //transition
    ])

  ]
})
export class AppComponent {
  state: string = "small";
  title = 'angular-animations';
}
