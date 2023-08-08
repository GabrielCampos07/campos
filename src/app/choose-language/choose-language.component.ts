import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { pulseOnEnterAnimation } from 'angular-animations';
import { TranslateService } from '@ngx-translate/core';

const enterTransition = transition(':enter', [
  style({
    opacity: 0,
  }),
  animate(
    '1s ease-in',
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
    '1s ease-out',
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
export class ChooseLanguageComponent implements OnInit {
  stars: number[] = [];
  show: boolean = true;
  language: any;

  constructor(public translate: TranslateService) {
    this.stars.length = 100;
    translate.addLangs(['pt', 'en']);
    translate.setDefaultLang('pt');
  }

  ngOnInit(): void {
    setInterval(() => (this.show = !this.show), 1500);
  }

  generateRandomStar(position?: string) {
    const screenWidht = window.innerWidth;
    const screenHeight = window.innerHeight;

    let value = Math.random();

    if (position === 'left') value *= screenWidht - 100;

    if (position === 'top') value *= screenHeight - 100;

    return value + 'px';
  }

  switchLanguage(lang: any) {
    this.language = lang;
    this.translate.use(lang);
  }
}
