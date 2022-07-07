import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InserirReservasComponent } from './inserir-reservas/inserir-reservas.component';
import { ProdutoReservaComponent } from './produto-reserva/produto-reserva.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InserirReservasComponent, ProdutoReservaComponent]
})
export class InserirReservasModule { }
