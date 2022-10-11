import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservasComponent } from './reservas/reservas.component';
import { ReservaComponent } from './reserva/reserva.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ReservasComponent, ReservaComponent]
})
export class ReservasModule { }
