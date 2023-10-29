console.log("Create a BankAccount class with encapsulated properties (accountNumber, balance). Implement methods getAccountNumber(), getBalance(), deposit(amount), and withdraw(amount) ensuring encapsulation.");
class BankAccount{
  
    SetAccountNo(a){
         this.accountNumber=a;
    }
    Setbalance(b){
         this.balance=b;
    }
    getAccountNumber(){
        console.log(`Account Number: ${this.accountNumber}`);
    }
    getBalance(){
        console.log(`Balance: ${this.balance}`);
    }
    deposit(amount){
        this.balance+=amount;
        console.log(`Current Balance is: ${this.balance}`);
    }
    withdraw(amount){
        if(amount<this.balance){
            console.log(`Withdrawn Amount is: ${amount}`);
            console.log(`current balance is: ${this.balance-amount}`);
        }
        
    }
}
let obj1=new BankAccount();
obj1.SetAccountNo(24591651);
obj1.Setbalance(255520);
obj1.getAccountNumber();
obj1.getBalance();
obj1.deposit(1500);
obj1.withdraw(2500);

console.log("Implement a class TemperatureConverter with a private property celsius. Implement methods setCelsius(value), getCelsius(), convertToFahrenheit(), and convertToKelvin() ensuring private access to the celsius property.");
    class TemperatureConverter{

        setcelcius(value){
            this.val=value;
        }
        getCelcius(){
            console.log(`Given Celcius value: ${this.val}`);
        }
        convertToFahrenheit(){
           console.log(`In Farenhiet: ${this.val*(9/5)+32}`);
        }
        convertToKelvin(){
            console.log(`In Kelvin: ${this.val+273.15}`);
        }
    }
    const con1=new TemperatureConverter();
    con1.setcelcius(28);
    con1.getCelcius();
    con1.convertToFahrenheit();
    con1.convertToKelvin();


    console.log("Create a MathOperations class with a static method square(number). Create a child class AdvancedMathOperations that extends MathOperations. Implement a static method cube(number) in AdvancedMathOperations.");
    class MathOperations{
        constructor(){
            
        }
        static square(number){
            var num1=number*number;
            console.log(num1);
        }
    }
    class AdvancedMathOperations extends MathOperations{
        constructor(){
            super();
        }
        static cube(number){
            var num=number*number*number;
            console.log(num);
        }
    }
    obj=new AdvancedMathOperations();
    MathOperations.square(2);
    AdvancedMathOperations.cube(2);




  console.log("Inheritance and Method Overriding:");
    class shape{
        constructor(){
            console.log(`Area and perimeters of`);
        }
        calculateArea(){
            console.log(`override method `);
        }
        calculatePerimeter(){
            console.log(`override method`);
        }
    }
    class circle extends shape{
        constructor(){
            super();
            console.log(` circle :-`);
        }
        calculateArea(r){
            console.log("Area:",1.22*r*r);
        }
        calculatePerimeter(r){
            console.log("Perimeter:",2*3.14*r);
        }
    }
    class square extends shape{
        constructor(){
            super();
            console.log(` square :-`);
        }
        calculateArea(s){
            console.log("Area",s*s);
        }
        calculatePerimeter(s){
            console.log("Perimeter:",4*s);
        }
    }

    const obje2=new circle();
    obje2.calculateArea(2);
    obje2.calculatePerimeter(2);
    const obje4=new square();
    obje4.calculateArea(2);
    obje4.calculatePerimeter(2);