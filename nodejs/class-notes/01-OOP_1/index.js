'use strict'

//console.log('hello DE')

const draftObject = {

    propertyName: "Any value",

    //Fonksiyon objenin icindeyse ona metod deniyor

    methodName: function(a,b){
        return a+b;
    }
}

//console.log(draftObject.methodName(3,5));
//console.log(draftObject.propertyName);


const Car = {
    brand: "BMW",
    model: "Combi",
    year: 2022,
    color: ["blue", "white"],
    details:{
        door: 5,
        isAutoGear: true
    },
    engine: function(){
        return 'engine status good'
    }
}

console.log(Car.brand);
console.log(Car["brand"]);       //Üsttekinin aynisi

console.log(Car.color);
console.log(Car.details);
console.log(Car.details.isAutoGear);
console.log(Car["details"]["isAutoGear"]);        //Üsttekinin aynisi

console.log(Car.engine());
console.log(Car['engine']());             //Üsttekinin aynisi




