import { Component, OnInit } from '@angular/core';
import { Operator } from 'src/assets/interface/operator';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

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
