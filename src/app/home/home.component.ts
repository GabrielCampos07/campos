import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Howl } from 'howler';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('output') outputElement: ElementRef | undefined;

  typedText = '';
  cursorBlink = true;
  animationInterval: any;
  terminalSound: Howl | undefined;
  spaceTravelSound: Howl | undefined;

  constructor(private translate: TranslateService) {
    this.translate.use(environment.language || 'pt');
  }

  ngOnInit(): void {
    const textToType = 'Campos.SobreMim';

    this.typeText(textToType);

    this.spaceTravelSound = new Howl({
      src: ['assets/sounds/space-travel-sound.mp3'],
    });

    this.terminalSound = new Howl({
      src: ['assets/sounds/typing-sound.mp3'],
    });

    // setInterval(() => {
    //   this.spaceTravelSound?.play();
    // }, 15000);
  }

  typeText(text: string): Promise<void> {
    return new Promise<void>((resolve) => {
      let currentIndex = 0;

      const typeInterval = setInterval(() => {
        this.terminalSound?.play();
        if (currentIndex < text.length) {
          this.typedText += text[currentIndex];
          currentIndex++;
        } else {
          clearInterval(typeInterval);
          resolve();
          this.terminalSound?.pause();
          // this.spaceTravelSound?.play();
        }
      }, 100);
    });
  }
}
