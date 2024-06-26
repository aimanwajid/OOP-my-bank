#! /usr/bin/env node
import inquirer from "inquirer"
interface ibankaccount{
   credit (amount:number) : void;
   debit (amount:number) : void;
}
class Bankaccount implements ibankaccount{
   accountbalance : number;
   constructor (accountbalance:number){
       this.accountbalance=accountbalance
   }
  
  public credit (amount: number){
    if(amount>0){
        this.accountbalance+=amount
        console.log("credit successfully get into new account and your balance is :"+this.accountbalance);
    }
    else {
        console.log("credit unsuccessful");
    }
  }
  public debit(amount:number){
    if (amount>0 && amount<this.accountbalance){
        this.accountbalance-=amount
        console.log("debit successfully share in new account balance:"+this.accountbalance);
    }else {
        console.log("debit unsuccessfully");
    }
  }
}
class Customer {
   person: {
        firstname: string;
        lastname: string;
    }
    age:number;
    gender:string;
    mobile_number:number;
    bankaccount:Bankaccount;
    constructor(person:{firstname:string,lastname:string},age:number,gender:string,mobile_number:number,bankaccount:Bankaccount){
        this.person=person;
        this.age=age;
        this.gender=gender;
        this.mobile_number=mobile_number;
        this.bankaccount=bankaccount;
    }
    public display(){
        console.log("Name:"+this.person.firstname+""+this.person.lastname);
        console.log("Age:"+this.age);
        console.log("Gender:"+this.gender);
        console.log("Mobile Number:"+this.mobile_number);
        console.log("Amount In Bank:"+this.bankaccount.accountbalance);
        console.log();
    }
}
const a1=new Bankaccount(800)
const c1=new Customer({firstname:"aiman",lastname:"khan"},20, "female", 3152745896,a1);
c1.display()
c1.bankaccount.debit(500)
console.log()
const a2=new Bankaccount (500)
const c2=new Customer({firstname:"ali",lastname:"khan"},29, "male", 3336789045,a2);
c1.display()
c1.bankaccount.debit(200)
console.log()