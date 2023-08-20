import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { pulseOnEnterAnimation } from 'angular-animations';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Howl } from 'howler';

const enterTransition = transition(':enter', [
  style({
    opacity: 0,
  }),
  animate(
    1500,
    style({
      opacity: 1,
    })
  ),
]);

const leaveTrans = transition(':leave', [
  style({
    opacity: 1,
  }),
  animate(
    500,
    style({
      opacity: 0,
    })
  ),
]);

const fadeIn = trigger('fadeIn', [enterTransition]);

const fadeOut = trigger('fadeOut', [leaveTrans]);

@Component({
  selector: 'app-choose-language',
  templateUrl: './choose-language.component.html',
  styleUrls: ['./choose-language.component.scss'],
  animations: [fadeIn, fadeOut, pulseOnEnterAnimation()],
})
export class ChooseLanguageComponent {
  stars: number[] = [];
  show: boolean = true;
  isNextStep: boolean = false;
  terminalSound: Howl | undefined;
  actualLanguage =
    window.localStorage.getItem('lang') ||
    window.navigator.language.substring(0, 2);

  constructor(public translate: TranslateService, private router: Router) {
    if (this.actualLanguage !== 'pt' && this.actualLanguage !== 'en')
      this.actualLanguage = 'en';

    this.stars.length = 100;
    translate.addLangs(['pt', 'en']);
    translate.setDefaultLang(this.actualLanguage);
  }

  ngOnInit(): void {
    setInterval(() => (this.show = !this.show), 1500);

    this.terminalSound = new Howl({
      src: ['assets/sounds/dramatic-sound.mp3'],
      volume: 0.2,
    });
  }

  generateRandomStar(position?: string): string {
    const screenWidht = window.innerWidth;
    const screenHeight = window.innerHeight;

    let value = Math.random();

    if (position === 'left') value *= screenWidht - 100;

    if (position === 'top') value *= screenHeight - 100;

    return value + 'px';
  }

  switchLanguage(lang: string): void {
    this.translate.use(lang || 'pt');
    environment.language = lang || 'pt';
  }

  nextStep(): void {
    this.stars.length = 0;
    this.isNextStep = true;
    window.localStorage.setItem('lang', environment.language || 'pt');
    this.terminalSound?.play();

    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 2500);
  }
}
