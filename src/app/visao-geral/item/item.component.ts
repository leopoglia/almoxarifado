import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }


  lista = [
    {imagem: "https://i.imgur.com/rOhhM3b.png", nome: "Relé", descricao: "É um interruptor eletromecânico projetado por Michael Faraday na década de 1830.", quantidade: "153"},
    {imagem: "https://i.imgur.com/rOhhM3b.png", nome: "Relé", descricao: "É um interruptor eletromecânico projetado por Michael Faraday na década de 1830.", quantidade: "153"},
    {imagem: "https://i.imgur.com/rOhhM3b.png", nome: "Relé", descricao: "É um interruptor eletromecânico projetado por Michael Faraday na década de 1830.", quantidade: "153"},
    {imagem: "https://i.imgur.com/rOhhM3b.png", nome: "Relé", descricao: "É um interruptor eletromecânico projetado por Michael Faraday na década de 1830.", quantidade: "153"}
  ]

  item(){
    this.route.navigate(['/visaogeral/produto']);
  }

}
