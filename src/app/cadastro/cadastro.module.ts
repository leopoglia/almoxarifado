import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cadastro1Component } from './cadastro1/cadastro1.component';
import { Cadastro2Component } from './cadastro2/cadastro2.component';
import { Cadastro3Component } from './cadastro3/cadastro3.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Cadastro1Component, Cadastro2Component, Cadastro3Component]
})
export class CadastroModule { }
