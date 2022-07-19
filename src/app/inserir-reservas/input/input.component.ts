import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   
  }

  produtos = [
    { name: "Rele" },
    { name: "Rele" },
    { name: "Rele" },
  ];
  
  caixaInput:any = document.querySelector(".input");
  input:any = document.querySelector("input")
  busca:any = document.querySelector(".busca");

  buscar(event) {
    let dado:any = event.target.value;
    let matrizVazia = [];
    if (dado) {
      matrizVazia = this.produtos.filter((data, { name }) => {
        return data.name
          .toLocaleLowerCase()
          .startsWith(dado.toLocaleLowerCase());
      });
      matrizVazia = matrizVazia.map((data, { name }) => {
        return (data = `<li>${data.name}</li>`);
      });
      document.querySelector(".input").classList.add("ativo");
      this.sugestoes(matrizVazia);
    } else {
      document.querySelector(".input").classList.remove("ativo");
    }
  };
  
  sugestoes(lista) {
    let dados;
    if (lista.length) {
      dados = lista.join("");
    } else {
      dados = `<li>Invalido</li>`;
    }
    document.querySelector(".busca").innerHTML = dados;
  }

}
