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
    engine: () => {
        return `engine model ${this.model}`            //Burasi undefined gelir. arrow function global olarak tanimlanmis oldugu icin burayi göremiyormus. Onun icin objelerin icinde genelde arrow function kullanmiyormusuz.
    },
    aciklama: function() {
        return `arabanin rengi ${this.color}`
    }
}

console.log(Car.brand);
console.log(Car["brand"]);       //Üsttekinin aynisi

console.log(Car.color);
console.log(Car.details);
console.log(Car.details.isAutoGear);
console.log(Car["details"]["isAutoGear"]);        //Üsttekinin aynisi

console.log(Car.engine());
console.log(Car['engine']());        //bunlar arrow function oldugu icin undefined geliyorlar        

console.log(Car.aciklama());     
console.log(Car['aciklama']());          //Üsttekinin aynisi


const sampleArray = ['v1', 'v2', 'v3', 'v4']

const [x,y] = sampleArray
console.log(x,y);           //v1,v2

const newArr = [...sampleArray, 'new1', 'new2']
console.log(newArr);                //[ 'v1', 'v2', 'v3', 'v4', 'new1', 'new2' ]

const {brand, model, year, ...Other} = Car
console.log(model);
console.log(Other);           //Obje olarak arda kalanlar


const {model:newModel, brand:newBrand, year:newYear, ...newOthers} = Car    //Yeniden isimlendirme
console.log(newModel);
console.log(newOthers);


const newCar = {             // Objeyi kopyaladik
    ...Car
}
console.log(newCar);


const jsonArr = JSON.stringify(newCar)          //Json'a cevirirken fonksiyonlari almaz
console.log(jsonArr);

const newCarFromJson = JSON.parse(jsonArr)
console.log(newCarFromJson);


const newArrayFromObject = Object.entries(Car)        //Icteki key-value pairleri de array yapiyor
console.log(newArrayFromObject);


const newArrayFromObjectValues = Object.values(Car)     //Sadece value'lardan bir array olusturuyor.
console.log(newArrayFromObjectValues);


//!Constructor

const PascalCaseName = function(){
    this.property = value
}

const CarConstructor = function(brand, model, year){
    this.year = year;
    this.brand = brand;
    this.model = model;
}

//console.log(CarConstructor(2021, 'opel', 'vectra'));            burasi hata verir

const newcarWithConstructor = new CarConstructor('Audi', 'SX7', 2021)
console.log(newcarWithConstructor);








