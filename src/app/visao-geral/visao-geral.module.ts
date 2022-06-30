import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisaoGeralComponent } from './visao-geral/visao-geral.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [VisaoGeralComponent, ItemComponent]
})
export class VisaoGeralModule { }
