import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material.module';
import { MenuComponent } from './components/menu/menu.component';
import { NgxTranslateModule } from './modules/ngxTranslate.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, MaterialModule, NgxTranslateModule, RouterModule],
  exports: [MaterialModule, MenuComponent, NgxTranslateModule],
  declarations: [MenuComponent],
})
export class SharedModule {}
