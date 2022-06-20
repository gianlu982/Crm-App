import { Component, OnInit } from '@angular/core';
import { Operator } from 'src/assets/interface/operator'; 
import { Router } from '@angular/router';
import operatorList from 'src/assets/operatorList.json'; // This is a json file that contains the list of operators
import loginOperator from 'src/assets/loginOperator.json'; // This is a json file that contains the list of user e passwwords
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  operatorlog: Operator[] = [];

  operator: Operator[]  = operatorList;

  operatorsLogged: string = "";
  inputPassword : string = "";

  ngOnInit(): void {
  }


  getOperatorsLogged() {
    this.operatorlog = operatorList.find((operator:Operator) => operator.id === this.operatorsLogged);   
  }

  setOperatorsLogged(){
    localStorage.setItem('operatorLogged', JSON.stringify(this.operatorlog));
  }

  login(){
    const loginObj = loginOperator.find((operator:any) => operator.id === this.operatorsLogged);
    if(this.inputPassword === loginObj.password){
      this.getOperatorsLogged();
      this.setOperatorsLogged();
      this.router.navigate(['/home']);
    }else{
      alert("Id or password incorrect; use Id: 101 for admin, 102,103 for user; password: 123");
    }
  }
}
