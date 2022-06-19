import { Component, OnInit } from '@angular/core';
import { Operator } from 'src/assets/interface/operator';
import data from 'src/assets/contactList.json';
import { Contact } from 'src/assets/interface/contact';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  operatorLogged!: Operator;
  operatorStr: any;
  contactList = data;
  contactSelected: any;


  constructor() { }

  ngOnInit(): void {    
    this.getData();
    this.contactList = this.filterContacts();
  }

  getData() {
    this.operatorStr = localStorage.getItem('operatorLogged');
    this.operatorLogged = JSON.parse(this.operatorStr);    
   }

   filterContacts(){
    if(this.operatorLogged.level === 'admin'){
      return this.contactList;
    }else{
      return this.contactList.filter((contact: { operatorId: string; }) => contact.operatorId === this.operatorLogged.id);
    }
   }

   selectContact(cont: any){
    return this.contactSelected = cont;
   }

   deleteContact(x: any){
    const id = this.contactList.indexOf(x);
    return this.contactList.splice(id, 1);
   }

   onSubmit(f: NgForm){
    this.contactList.push(f.value);
   }

}
