import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent],
  declarations: [HeaderComponent, NavComponent],
  
})
export class ComponentesFixosModule { }
