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

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'cadastro/1', component: Cadastro1Component},
  { path: 'cadastro/2', component: Cadastro2Component},
  { path: 'cadastro/3', component: Cadastro3Component},
  { path: 'visaogeral', component: VisaoGeralComponent},
  { path: 'inserirreserva', component: InserirReservasComponent},
  { path: 'reservas', component: ReservasComponent},
  { path: 'cadastrar/produto', component: CadastrarProdutoComponent },
  { path: 'cadastrar/usuario', component: CadastrarUsuarioComponent },
  { path: 'visaogeral/produto', component: ProdutoComponent }
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
    ProdutoComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})




export class AppModule { }
