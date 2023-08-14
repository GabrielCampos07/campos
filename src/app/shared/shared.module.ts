import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material.module';
import { MenuComponent } from './components/menu/menu.component';
import { NgxTranslateModule } from './modules/ngxTranslate.module';
import { RouterModule } from '@angular/router';
import { SoundConfigComponent } from './components/sound-config/sound-config.component';

@NgModule({
  imports: [CommonModule, MaterialModule, NgxTranslateModule, RouterModule],
  exports: [
    MaterialModule,
    MenuComponent,
    NgxTranslateModule,
    SoundConfigComponent,
  ],
  declarations: [MenuComponent, SoundConfigComponent],
})
export class SharedModule {}
