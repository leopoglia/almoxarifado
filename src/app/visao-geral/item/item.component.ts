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
    {id: 2, imagem: "https://www.fibracem.com/wp-content/uploads/2020/11/0000_Abracadeira.0.png", nome: "Abraçadeira para poste", descricao: "Abraçadeiras para poste", quantidade: "9"},
    {id: 3, imagem: "https://www.metalmatrix.com.br/uploads/produtos/thumb_d5137d970709908df9a0fe22a57a88ee.png", nome: "Abraçadeira pequena", descricao: "Abraçadeira de plastico pequena", quantidade: "0"},
    {id: 4, imagem: "https://s3-sa-east-1.amazonaws.com/robocore-lojavirtual/697/images/697_1_M.png?20220504161329", nome: "Adaptador para fita de led", descricao: "Adaptador para fita de led", quantidade: "1"}

  ]

  link(id){
    this.route.navigate(['/visaogeral/produto/' + id]);
  }

}
