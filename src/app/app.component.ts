import { Component, OnInit } from '@angular/core';
import { Howl } from 'howler';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
  spaceTravelSound: Howl | undefined;

  constructor() {}

  ngOnInit(): void {
    // this.spaceTravelSound = new Howl({
    //   src: ['assets/sounds/space-travel-sound.mp3'],
    //   volume: 0.1,
    // });

    // setInterval(() => {
    //   this.spaceTravelSound?.play();
    // }, 15000);
  }
}
