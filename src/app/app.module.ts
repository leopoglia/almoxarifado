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



const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'cadastro1', component: Cadastro1Component},
  { path: 'cadastro2', component: Cadastro2Component},
  { path: 'cadastro3', component: Cadastro3Component},

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
    Cadastro3Component
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
