import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AceitarUsuariosComponent } from './aceitar-usuarios/aceitar-usuarios.component';
import { UsuarioComponent } from './usuario/usuario.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AceitarUsuariosComponent, UsuarioComponent]
})
export class AceitarUsuariosModule { }
