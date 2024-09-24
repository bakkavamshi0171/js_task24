// Create a simple inheritance hierarchy using JavaScript classes.

// Requirements:

// 1. Create a base class called Vehicle.
// 2. Add properties: brand, model, year.
// 3. Add methods: startEngine(), accelerate().
// 4. Create two subclasses: Car and Truck.
// 5. Inherit properties and methods from Vehicle.
// 6. Add unique properties and methods to each subclass.

class Vehicle{
    constructor(brand,model,year){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    startEngine(){
        return "vehicle has started"
    }
    accelerate(){
        return "ready to move press accelerator"
    }
}

class car extends Vehicle{
    name; 
    gears;
    constructor(brand,model,year,name,gears){
        super(brand,model,year)
        this.name= name;
        this.gears= gears
    }
    speed(){
        return "more then 120km/h"
    }
    load(){
        return "not More Then 6 people or 1 ton"
    }
}

class Truck extends Vehicle{
    name;
    gears;
    constructor(brand,model,year,name,gears){
        super(brand,model,year)
        this.name= name;
        this.gears= gears
    }
    speed(){
        return "100km/h"
    }
    load(){
        return "More Then 20 tons"
    }
}

let bwm = new car("mercedes",2021, 2022,"bmw","6-auto");
console.log(bwm.speed());
console.log(bwm.brand);
let DCM = new Truck("TATA",2014,2019,"DCM","5-Mal");
console.log(DCM.load());

// task-2 (Vijaya kumar G)
// Create a class called BankAccount with private properties:

// - balance
// - accountNumber

// And public methods:
// - deposit(amount): adds amount to balance
// - withdraw(amount): subtracts amount from balance
// - getBalance(): returns balance

class BankAccount{
    #balance
    #accountNumber
    constructor(balance, accountNumber){
        this.#balance = balance;
        this.#accountNumber = accountNumber
    }
    deposit(amount){
        return this.#balance + amount;
    }
    withdraw(amount){
        return this.#balance - amount;
    }
    getBalance(){
        return this.#balance
    }
    set AcountNumber(acc){
        this.#accountNumber = acc
    }
    get getAccountNumber(){
        return this.#accountNumber;
    }
}
let cus1 = new BankAccount(100000,9553750551);
console.log(cus1.deposit(25000));
console.log(cus1.withdraw(15990))
console.log(cus1.getBalance());
cus1.AcountNumber = 8523697410;
console.log(cus1.getAccountNumber);

// task-3  (Vijaya kumar G)
// Create a class called MathHelper with a static method:

// - addNumbers(a, b): returns the sum of a and b

class MathHelper{
    static addNumbers(a, b){
        return a+b
    }
}
console.log(MathHelper.addNumbers(4,5));
// static method we cannot access with object we can only access through a class name