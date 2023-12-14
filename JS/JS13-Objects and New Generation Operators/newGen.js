/* -------------------------------------------------------------------------- */
/*                                 DESTRUCTURING                                */
/* -------------------------------------------------------------------------- */

const cars = {
    name2: "Mercedes",
    model: 2022,
    engine: "3.0",
    color: ["white", "red"]
}

//1. yöntem - Klasik

/* console.log(cars.name);
console.log(cars["name"]); */


// 2. yöntem destructuring

/* const {name, engine, model} = cars

console.log(name);
console.log(engine);
console.log(model); */


//! objenin valuelarını atacağımız değişken isimleri objenin propertyleri ile aynı ismi taşımalı


const{name2, engine:motor, model: yil} = cars
console.log(name2);
console.log(motor);
console.log(yil);



const team = [
    {
      name2: "Harold",
      lastname: "Uzunkulak",
      DateOfBirth: 2000,
      job: "developer",
      salary: 8000,
      drivingLicense: true,
    },
    {
      name2: "Harry",
      lastname: "Strevy",
      DateOfBirth: 2002,
      job: "developer",
      salary: 4000,
      drivingLicense: false,
    },
    {
      name2: "Rıfkı",
      lastname: "Kulagıkesik",
      DateOfBirth: 2000,
      job: "devOps",
      salary: 30000,
      drivingLicense: true,
    },
];


//Sirayla ad meslek ve salary'lerini yazalim

team.forEach((p) => {
    console.log("NAME: ", p.name2);
    console.log("MESLEK: ", p.job);
    console.log("MAAS: ", p.salary);
    console.log("--------------");
})

//destruction metodu ile

team.forEach((p) => {
    const{name2, job,salary} = p
    console.log("NAME: ", name2);
    console.log("MESLEK: ", job);
    console.log("MAAS: ", salary);
    console.log("--------------");
})


//Fonksiyonun gönderdigi bir object'i destructure etmek

const getInfo = () => {
    return {
        id: new Date().getTime(),
        productName: "MacBook",
        price: "2000€"
    }
}
console.log(getInfo());


const {productName, price} = getInfo()
console.log(`${productName} ürününün fiyati ${price}'dir.`);


const data = {
    id: new Date().getTime(),
        productName: "Apple Iphone 14 Pro Max",
        price: 1500
}

const showName = (name2) => console.log(name2);
showName("Ziyettin")         //primitive degiskenlerde böyleydi, aynisini arraylerle de yapabiliyor muyum?


let sum = 0
const calculate = (liste) => {
    return liste.reduce((t,i) => t+i)
}

console.log(calculate([4,5,3,7,8,9,11,14,56,47,92])); 



const showproducts = ({productName, price}) => {
    console.log(`${productName} ürününün indirimli fiyati: ${price * 0.8}`);
}

showproducts(data)


//id'si tek sayi olanlari ürünün merkez depodadir yazsin, degilse ürün sube deposundadir yazsin


const stoktaVarMi = ({productName, id}) => {
    id % 2 === 1 ? console.log(`${productName} ürünü merkez depodadir`) : console.log(`${productName} ürünü sube deposundadir`);
}
stoktaVarMi(data)




const workersList = [
    {
      name: "Harold",
      lastname: "Uzunkulak",
      DateOfBirth: 2000,
      job: "developer",
      salary: 8000,
      drivingLicense: true,
    },
    {
      name: "Harry",
      lastname: "Strevy",
      DateOfBirth: 2002,
      job: "developer",
      salary: 4000,
      drivingLicense: false,
    },
    {
      name: "Rıfkı",
      lastname: "Kulagıkesik",
      DateOfBirth: 2000,
      job: "devOps",
      salary: 30000,
      drivingLicense: true,
    },
];


//Sürücü belgesi olanlarin isimlerini yazdirin

const{drivingLicense, name} = workersList

const checkDriving = ({drivingLicense, name}) =>{
    return drivingLicense ? console.log(name): null;
}
workersList.map((item) => checkDriving(item))



//Arraylerde destructuring islemi

const nameList = ["ayse", "elif"]

const[p1, p2] = nameList
console.log(p1);


console.clear()
/* -------------------------------------------------------------------------- */
/*                                 REST (...)                                 */
/* -------------------------------------------------------------------------- */



//function declarationda cok fazla gönderile parametreleri => arguments


function argCheck(){
  console.log(arguments);
}

argCheck(45,56,7,8,34,5,6,7,8,"Merhaba")


// arrow functionlarda ... gelen parametreleri almak icin kullanilir
// foksiyona gönderilen primitive degerleri de bir diziye dönüstürmüs olur
//rest operatörü mutlaka sonda olmalidir


/* const arrowCheck = (a,b, ...deger) =>{
  console.log(a);
  console.log(b);
  console.log(deger);
}

arrowCheck(45,56,7,8,34,5,6,7,8,"Merhaba") */



// Rest operatörü arraylerde de kullaniliyor

const car = ["BMW", "Mercedes", "Audi", "Renault", "Ferrari", "Opel", "Mazda", "Honda"]

const [a,b, ...restCars] = car

console.log(a);
console.log(b);
console.log(restCars);

console.clear()
// Rest'in Objelerde kullanimi


personel = 
    {
      personName: "David",
      lastName: "Strevy",
      DateOfBirth: 2000,
      job: "developer",
      salary: 8000,
      drivingLicense: true,
    }

const {personName, lastName, ...info} = personel

console.log(personName);          //Üstteki isimle ayni olmak zorunda
console.log(lastName);
console.log(info);
console.log(info.drivingLicense);





const total = (...value) => {
  return value.reduce((sum, x) => sum + x)
}

console.log("TOPLAM = ", total(45,56,67,78,89,90,12,23,34,45));


/* -------------------------------------------------------------------------- */
/*                                   SPREAD(...)                              */
/* -------------------------------------------------------------------------- */


//? Spread operatoru ise iterables olan bir elemani bireysel
//? degerler haline getirir.


const flyingVehicles = ["aircraft", "helicopter", "drone"]
const automobile = ["truck", "suv", "Car"]


const allVehicles = [...flyingVehicles, ...automobile]    //bireysel degerler haline getirdi ve sonra altta birlestirdik
console.log(allVehicles);


//Araya eklemeler de yapabiliriz

const allVehicles2 = [...flyingVehicles, "bicycle", ...automobile]
console.log(allVehicles2);


//Stringleri harf harf parcalamak

let statement = "Havalar sicak olunca piknik yapariz."
const charSt = [...statement]
console.log(charSt);


console.log(Math.max(3,5,-21,15,9,11));

const numberlist = [45,56,67,78,89,90,12,23,-34,45]
console.log(Math.max(...numberlist));   // ... spread islemi yapti,sonra maxi buldu. direkt olarak arrayi yazsan bulmuyor. ... silip deneyebilirsin

console.log(Math.min(...numberlist));



/* ------------------------------------------------------------------------------------------------- */ 

const myObj = {a:4,b:6}
const yourObj = {c:8, d:9}

//Object kopyalama icin kullanilabilir

const copiedObj = {...myObj}

console.log(copiedObj);

copiedObj.b = 34

console.log(myObj);
console.log(copiedObj);

const combinedObj = {...myObj, ...yourObj}

console.log(combinedObj);
