import { Component, OnInit } from '@angular/core';
import { Howl } from 'howler';

@Component({
  selector: 'app-sound-config',
  templateUrl: './sound-config.component.html',
  styleUrls: ['./sound-config.component.scss'],
})
export class SoundConfigComponent implements OnInit {
  soundOn: boolean = false;
  spaceTravelSound: Howl | undefined;

  constructor() {
    this.spaceTravelSound = new Howl({
      src: ['assets/sounds/space-travel-sound.mp3'],
      volume: 0.1,
      loop: true,
      autoplay: this.soundOn,
    });
  }

  ngOnInit(): void {}

  soundMusic(): void {
    this.soundOn = !this.soundOn;

    if (this.soundOn) {
      this.spaceTravelSound?.play();
    } else this.spaceTravelSound?.pause();
  }
}
