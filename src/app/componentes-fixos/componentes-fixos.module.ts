import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { FiltroComponent } from './filtro/filtro.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [HeaderComponent],
  declarations: [HeaderComponent, NavComponent, CabecalhoComponent, FiltroComponent],
  
})
export class ComponentesFixosModule { }
