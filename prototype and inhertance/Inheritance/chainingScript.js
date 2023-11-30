

let arr1 = new Array(1,2,3,4);
let arr2 = [7,8,9,10];

console.log('arr1:',arr1);
console.log('arr2:',arr2);

// (1):-Create your custom map method (myMap),which will work exactly similar to Array.map().
Array.prototype.myMap = function(fun){
   let newArr= [];
   for(let i=0;i<this.length;i++){
    let element = this[i];
    let x= fun(element);//complete the condition that is given
    newArr.push(x);
   }
    
return newArr;

}
let arr4 = arr2.myMap(function(z){
    return z*2;
})
console.log(arr4);

// let arr3 = arr1.map(function(x){
//     return x*2;
// })
// console.log("arr3 :-",arr3);

// (2):-Create your custom forEach method (myForEach),which will work exactly similar to Array.forEach().
Array.prototype.myForEach=function(fun){
    for(let i=0;i<this.length;i++){
        let element = this[i];
        let work = fun(element);
        console.log(work);
    }
}

arr4.myForEach(function(z){
   return z/2;
})


// arr1.forEach(function(x){
//     console.log(x*2);
// })


// (3):-Create your custom filter method (myFilter), which will work exactly similar to Array.filter().

Array.prototype.myFilter=function(fun){
    let newArr= [];
    for(let i=0;i<this.length;i++){
        let element= this[i];
        let work= fun(element);
        
        if(work==true) newArr.push(element)
    }
    return newArr;

    
}


let arr5 = arr2.myFilter(function(num){
    return num%2==1;
})

console.log('arr5 :-' ,arr5);

// (4):-Create your custom reduce method (myReduce),which will work exactly similar to Array.reduce().
 
Array.prototype.myReduce =function(fan,value){
    for(let i=0;i<this.length;i++){
        let element= this[i];
        let total = value;
        let work = fun(total,element);
    }
    return work;
}




// let x =arr1.reduce(function(total,num){
//     return  total+num;
// },0);
// console.log(x);
let arr6= arr2.reduce(function(total,num){
    return  total+num;
},0);
console.log('arr6 :-',arr6);


/*
 (5):-  Bonus:
chaining for map, filter, reduce etc should be there. for e.g arr.map().filter().reduce()
*/

arr7= arr1.myMap(function(num){
    return num*3;
}).myFilter(function(num){
    return num%2==0;
});

console.log('arr7 :-',arr7);

//it's working successfully yeay...
