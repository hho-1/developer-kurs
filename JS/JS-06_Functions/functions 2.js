/* function sum(a,b){
    let sum = a + b;
    return sum;
} */

/* let ad = prompt("Adinizi giriniz: ");
let soyad = prompt("Soyadinizi giriniz: ")

adsoyad(ad, soyad);


function adsoyad(str1, str2){
    console.log(str1+" "+str2);
} */

/* function bes(isim){
    for(let i = 1; i <=5; i++){
        console.log(isim);
    }
}
bes("Muhittin");

function power(value1, value2){
    console.log(Math.pow(value1, value2)); 
}

power(2, 6); */

/* const date = new Date();
const year = date.getFullYear();

let birthYear = +prompt("Dogum yiliniz: ")

function age(birthYear){
    return year - birthYear;
}

console.log("Yasiniz ", age(birthYear)); */

/* let star = "";

function rectangle(column, row){
    for (let i = 1; i <= row; i++){
        for (let j = 1; j <= column; j++){
            star += "* ";
        }
        star += "\n";
    }

    return star;
}

console.log(rectangle(4,3)); */

/* const isim = prompt("Adiniz: ")
const level = prompt("Seviye (VE, ME, HR, ya da EX): ")
let points = +prompt("Puan: ")

function findScore(ad, seviye, puan){
    if(seviye === "VE") {points = puan * 1.1}
    else if(seviye === "ME") {points = puan * 1.2}
    else if(seviye === "HR") {points = puan * 1.3}
    else if(seviye === "EX") {points = puan * 1.5}
    else console.log("Yanlis seviye girdiniz.");

    console.log(ad, " isimli kisinin aldigi toplam puan ",points);
}

findScore(isim, level, points); */







