import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    this.tamanho = (document.querySelector(".input").clientWidth) + 9;
    document.getElementById("busca").style.width = this.tamanho + 'px';

    window.onresize = function () {
      document.getElementById("busca").style.width = ((document.querySelector(".input").clientWidth) + 9) + 'px';
    };
  }


  tamanho: number;
  produtos = [
    { imagem: "https://www.fibracem.com/wp-content/uploads/2020/11/0000_Abracadeira.0.png", name: "Rele" },
    { imagem: "https://www.fibracem.com/wp-content/uploads/2020/11/0000_Abracadeira.0.png", name: "Rele" },
    { imagem: "https://www.fibracem.com/wp-content/uploads/2020/11/0000_Abracadeira.0.png", name: "Rele" },
    { imagem: "https://www.fibracem.com/wp-content/uploads/2020/11/0000_Abracadeira.0.png", name: "Rele" },
  ];

  caixaInput: any = document.querySelector(".input");
  input: any = document.querySelector("input")
  busca: any = document.querySelector(".busca");

  buscar(event) {
    let dado: any = event.target.value;
    let matrizVazia = [];
    if (dado) {
      matrizVazia = this.produtos.filter((data, { }) => {
        return data.name
          .toLocaleLowerCase()
          .startsWith(dado.toLocaleLowerCase());
      });
      matrizVazia = matrizVazia.map((data, { }) => {
        return (data = `<li style="display: flex; align-items: center;"><img src="${data.imagem}" style="width:30px; margin-right: 10px">  ${data.name}</li>`);
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
