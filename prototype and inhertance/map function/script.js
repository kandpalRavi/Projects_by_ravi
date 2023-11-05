let arr = new Array(1,2,4,5);//thats how js actually initialise arr or any other data type
let arr2 = [6,7,8,9];


//this is my own push function by prototype
// Array.prototype.myPush = function(value){
//     let index = this.length;
//     this[index]= value;
// }

// arr2.myPush(10);
// console.log(arr2);

// let arr3 =arr2.map(function(x){
//     return x*2;
// });
//  console.log(arr3);

//*****this is my own map function ******
Array.prototype.myMap =function(fun){
    let arr = this;  //for better understanding;
    let newArr=[];  //because map return new array
    for(let i=0;i<arr.length;i++){
        let element = arr[i];
        // when we calling map().we call it like this arr.map(fun(x){condition}) 
        // so the value of x is arr[i]
        let x = fun(element);

        newArr.push(x);
    }
    return newArr;
}

let arr3 = arr2.myMap(function(x){
    return x**2;
})
console.log(arr3);
