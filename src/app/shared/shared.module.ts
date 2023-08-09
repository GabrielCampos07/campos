import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material.module';
import { MenuComponent } from './components/menu/menu.component';
import { NgxTranslateModule } from './modules/ngxTranslate.module';

@NgModule({
  imports: [CommonModule, MaterialModule, NgxTranslateModule],
  exports: [MaterialModule, MenuComponent, NgxTranslateModule],
  declarations: [MenuComponent],
})
export class SharedModule {}
