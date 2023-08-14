import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>
    <app-sound-config></app-sound-config>`,
})
export class AppComponent {
  constructor() {}
}
