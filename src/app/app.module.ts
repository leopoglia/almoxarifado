import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component'
import { Cadastro1Component } from './cadastro/cadastro1/cadastro1.component';
import { Cadastro2Component } from './cadastro/cadastro2/cadastro2.component';
import { Cadastro3Component } from './cadastro/cadastro3/cadastro3.component';
import { VisaoGeralComponent } from './visao-geral/visao-geral/visao-geral.component';
import { InserirReservasComponent } from './inserir-reservas/inserir-reservas/inserir-reservas.component';
import { ReservasComponent } from './reservas/reservas/reservas.component';
import { CadastrarProdutoComponent } from './cadastrar-produto/cadastrar-produto/cadastrar-produto.component';
import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario/cadastrar-usuario.component';
import { ProdutoComponent } from './produto/produto/produto.component';
import { HeaderComponent } from './componentes-fixos/header/header.component';
import { NavComponent } from './componentes-fixos/nav/nav.component';
import { DetalhesReservaComponent } from './detalhes-reserva/detalhes-reserva/detalhes-reserva.component';
import { ItemComponent } from './visao-geral/item/item.component';
import { ItemGridComponent } from './visao-geral/item-grid/item-grid.component';
import { ReservaComponent } from './reservas/reserva/reserva.component';
import { PerfilComponent } from './perfil/perfil/perfil.component';
import { AceitarUsuariosComponent } from './aceitar-usuarios/aceitar-usuarios/aceitar-usuarios.component';
import { CabecalhoComponent } from './componentes-fixos/cabecalho/cabecalho.component';
import { UsuarioComponent } from './aceitar-usuarios/usuario/usuario.component';
import { FiltroComponent } from './componentes-fixos/filtro/filtro.component';
import { NavBarComponent } from './componentes-fixos/nav-bar/nav-bar.component';
import CheckLogged from './CheckLogged';
import { ProdutoReservaComponent } from './inserir-reservas/produto-reserva/produto-reserva.component';
import { ModalAdicaoComponent } from './cadastrar-produto/modal-adicao/modal-adicao.component';
import { InputComponent } from './inserir-reservas/input/input.component';
import { AlertasComponent } from './componentes-fixos/alertas/alertas.component';

const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [] },
  {
    path: 'cadastro', children: [
      { path: '1', component: Cadastro1Component },
      { path: '2', component: Cadastro2Component },
      { path: '3', component: Cadastro3Component }
    ]
  },
  {
    path: 'visaogeral', children: [
      { path: '', canActivate: [CheckLogged], component: VisaoGeralComponent },
      { path: 'produto/:id', canActivate: [CheckLogged], component: ProdutoComponent }
    ]
  },
  { path: 'inserirreserva', canActivate: [CheckLogged], component: InserirReservasComponent },
  {
    path: 'reservas', children: [
      { path: '', canActivate: [CheckLogged], component: ReservasComponent },
      { path: 'detalhes', canActivate: [CheckLogged], component: DetalhesReservaComponent }
    ]
  },
  {
    path: 'cadastrar', children: [
      { path: 'produto', canActivate: [CheckLogged], component: CadastrarProdutoComponent },
      { path: 'usuario', canActivate: [CheckLogged], component: CadastrarUsuarioComponent }
    ]
  },
  { path: 'usuario/aceitar', canActivate: [CheckLogged], component: AceitarUsuariosComponent },
  { path: 'perfil', canActivate: [CheckLogged], component: PerfilComponent }
];

@NgModule({
  exports: [
    RouterModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    Cadastro1Component,
    Cadastro2Component,
    Cadastro3Component,
    VisaoGeralComponent,
    InserirReservasComponent,
    ReservasComponent,
    CadastrarProdutoComponent,
    CadastrarUsuarioComponent,
    HeaderComponent,
    ProdutoComponent,
    NavComponent,
    DetalhesReservaComponent,
    ItemComponent,
    ReservaComponent,
    PerfilComponent,
    AceitarUsuariosComponent,
    CabecalhoComponent,
    UsuarioComponent,
    FiltroComponent,
    NavBarComponent,
    ProdutoReservaComponent,
    ModalAdicaoComponent,
    InputComponent,
    AlertasComponent,
    ItemGridComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [CheckLogged],
  bootstrap: [AppComponent]
})
export class AppModule { }
