import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChooseLanguageRoutingModule } from './choose-language-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { ChooseLanguageComponent } from './choose-language.component';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ChooseLanguageComponent],
  imports: [
    CommonModule,
    ChooseLanguageRoutingModule,
    SharedModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
})
export class ChooseLanguageModule {}

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
