import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const html = document.querySelector('html');

    if (localStorage.getItem('mode') == 'darkmode') {
      html.classList.add('darkmode');
    } else {
      localStorage.setItem('mode', 'lightmode');
    }

    if (localStorage.getItem('atual') == '1') {
      document.getElementById('1').classList.add('atual')
    } else if (localStorage.getItem('atual') == '2') {
      document.getElementById('2').classList.add('atual')
    } else if (localStorage.getItem('atual') == '3') {
      document.getElementById('3').classList.add('atual')
    } else if (localStorage.getItem('atual') == '4') {
      document.getElementById('4').classList.add('atual')
    } else if (localStorage.getItem('atual') == '5') {
      document.getElementById('5').classList.add('atual')
    }
  }

  darkmode($event) {
    const html = document.querySelector('html');
    const checkbox = document.querySelector('#mode');



    if (localStorage.getItem('mode') == 'lightmode') {
      localStorage.setItem('mode', 'darkmode');
    } else {
      localStorage.setItem('mode', 'lightmode');
    }
    document.querySelector('html').classList.toggle('darkmode');

  }


}
