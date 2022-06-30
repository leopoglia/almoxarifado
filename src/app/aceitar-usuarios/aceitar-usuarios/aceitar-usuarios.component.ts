import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aceitar-usuarios',
  templateUrl: './aceitar-usuarios.component.html',
  styleUrls: ['./aceitar-usuarios.component.css']
})
export class AceitarUsuariosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    localStorage.setItem('atual', '6');
  }

}
