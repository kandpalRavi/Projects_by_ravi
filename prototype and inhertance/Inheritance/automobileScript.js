
/*
Problem Statement :-
You have been appointed as senior developer in Tata’s R&D department.
The engineers there are lazy, they don’t want to do everything from scratch whenever they create a new model. 
They expect you to help them create an inheritance model for the automobiles.
*/

// with Object.create() methhod
let tataProduct ={
    primeMover : "engine",
    wheels :"four wheeler",
    gas: "petrol/disel",
    airBag:6,
    brand:"tata"
};

let car1 = Object.create(tataProduct);
car1.name="swift";
console.log("car1 :" ,car1);

// with constructor function()

function productTata(n){
    this.name=n;
    this.primeMover="engine";
    this.wheels= "four wheeler";
    this.gas= "Petrol/Disel";
    this.airBag= 4;
    this.Brand="Tata";
};

let car2 = new productTata("nexon");
console.log('car2',car2);