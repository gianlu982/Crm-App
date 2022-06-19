import { Component, OnInit } from '@angular/core';
import { Operator } from 'src/assets/interface/operator'; 
import operatorList from 'src/assets/operatorList.json'; // This is a json file that contains the list of operators

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  operatorlog: Operator[] = [];

  operator: Operator[]  = operatorList;

  operatorsLogged: string = "";

  ngOnInit(): void {
  }


  getOperatorsLogged() {
    this.operatorlog = operatorList.find((operator:Operator) => operator.id === this.operatorsLogged);   
  }

  setOperatorsLogged(){
    localStorage.setItem('operatorLogged', JSON.stringify(this.operatorlog));
  }

  saveOperatorsLogged(){
    this.getOperatorsLogged();
    this.setOperatorsLogged();
  }

}
