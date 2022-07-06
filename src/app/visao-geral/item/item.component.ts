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

  produtos = [
    {id: 1, imagem: "https://portstore.com.br/wp-content/uploads/2020/08/ABRA%C3%87ADEIRA_DE_NYLON_2_5X200_PRETA-removebg-preview.png", nome: "Abraçadeira grande de nylon preta", descricao: "Abraçadeira preta", quantidade: "61"},
    {id: 2, imagem: "https://www.fibracem.com/wp-content/uploads/2020/11/0000_Abracadeira.0.png", nome: "Abraçadeira para poste", descricao: "Abraçadeiras para poste", quantidade: "153"},
    {id: 3, imagem: "https://i.imgur.com/rOhhM3b.png", nome: "Relé", descricao: "É um interruptor eletromecânico projetado por Michael Faraday na década de 1830.", quantidade: "153"}
  ]

  link(id){
    this.route.navigate(['/visaogeral/produto/' + id]);
  }

}
