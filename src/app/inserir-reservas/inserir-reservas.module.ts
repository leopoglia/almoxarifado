import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InserirReservasComponent } from './inserir-reservas/inserir-reservas.component';
import { ProdutoReservaComponent } from './produto-reserva/produto-reserva.component';
import { InputComponent } from './input/input.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InserirReservasComponent, ProdutoReservaComponent, InputComponent]
})
export class InserirReservasModule { }
