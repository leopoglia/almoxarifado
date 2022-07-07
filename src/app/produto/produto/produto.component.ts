import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {
    this.idParametro = route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
    for(let i = 0; i < this.produtos.length; i++){
      if(this.produtos[i].id == this.idParametro){
        this.idProduto = i+1;
        this.produtoCerto[0] = this.produtos[i];
      } 
    }
    if(localStorage.getItem('menu') == 'aberto'){
      localStorage.setItem('menu', 'abrir')
    }
  }

  produtoCerto:any = [];
  produtos:any = [
    {id: 1, imagem: "https://portstore.com.br/wp-content/uploads/2020/08/ABRA%C3%87ADEIRA_DE_NYLON_2_5X200_PRETA-removebg-preview.png", nome: "Abraçadeira grande de nylon preta", detalhes: "Abraçadeira preta", quantidade: "61"},
    {id: 2, imagem: "https://www.fibracem.com/wp-content/uploads/2020/11/0000_Abracadeira.0.png", nome: "Abraçadeira para poste", detalhes: "Abraçadeiras para poste", quantidade: "9"},
    {id: 3, imagem: "https://www.metalmatrix.com.br/uploads/produtos/thumb_d5137d970709908df9a0fe22a57a88ee.png", nome: "Abraçadeira pequena", detalhes: "Abraçadeira de plastico pequena", quantidade: "0"},
    {id: 4, imagem: "https://s3-sa-east-1.amazonaws.com/robocore-lojavirtual/697/images/697_1_M.png?20220504161329", nome: "Adaptador para fita de led", detalhes: "Adaptador para fita de led", quantidade: "1"}
  ]

  idProduto;
  idParametro;
}
