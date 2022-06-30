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


  lista = [1,2,3,4]

  item(){
    this.route.navigate(['/visaogeral/produto']);
  }

}
