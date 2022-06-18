import { Component, OnInit } from '@angular/core';
import { Operator } from 'src/assets/interface/operator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  operatorLogged!: Operator;
  operatorStr: any;

  constructor() { }

  ngOnInit(): void {    
    this.getData();
  }

  getData() {
    this.operatorStr = localStorage.getItem('operatorLogged');
    this.operatorLogged = JSON.parse(this.operatorStr);    
   }
  

}


