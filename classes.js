class SavingAccount{
    constructor(accId, Name, Age){
          this.accId = 123456;
          this.Name = 'Madhavi';
          this.age = 22;
          this.balance = 1000;    
    }
      withdraw (amount){
        if ((this.balance - amount) >= 500){
          this.balance = this.balance - amount
        } else {
          console.log ('Transaction Not Allowed');
        }
      }
        printBalance(){
        console.log(this.accId);
        console.log(this.Name);
        console.log(this.age);
        console.log(this.balance);    
    }
  }
  class CreditAccount {
    constructor(){
      this.maxCredit = 30000;
    }
    credit (amount){
      if((this.maxCredit + amount) <= 50000){
        this.maxCredit = this.maxCredit + amount
      } else {
        console.log ('Credit Not Available')
      }
    }
    printmaxCredit(){
      console.log (this.maxCredit);
    }
  }
  class Account extends CreditAccount {
    constructor() {
      super();
      this.accid= ("123456");
      this.name= ("Madhu");
      this.age= ("22");
      //this.balance= ("1000");
    }
   printMyName(){
     console.log(this.accid);
     console.log(this.name);
     console.log(this.age);
   }
  }
  const human = new SavingAccount()
  //human.printMyName()
  human.withdraw(300)
  human.printBalance()
  //human.credit(20000)
  //human.printmaxCredit()
  
  
  
  
  
  