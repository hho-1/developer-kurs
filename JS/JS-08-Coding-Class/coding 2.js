//! Celcius degeri girildiginde bunu fahrenheita ceviren bir fonksiyon yaziniz.

/* let cevir = (celcius) => {
    let fahr = (celcius * 9 / 5) + 32;
    return fahr;
}

console.log(cevir(30)); */

//!Bir stringin tersini yazdiran fonksiyon

/* let yazi = "Hello World"

function reverse(text) {
    let tersten = ""
    for(let i = text.length - 1; i >= 0; i--){
        tersten += text[i];
    }
    return tersten;
}

console.log(reverse(yazi)); */


//!Belirli bir stringin palindrom olup olmadigini bulan fonksiyon

/* let yazi = prompt("Yazi giriniz: ")

function reverse(text) {
    let tersten = ""
    for(let i = text.length - 1; i >= 0; i--){
        tersten += text[i];
    }
    return text === tersten ? "true" : "false"
}

console.log(reverse(yazi)); */

//! Bir sayinin pozitif tam bölenlerinin toplamini bulan fonksionu yazalim

/* let sayi = 120;
let bolenToplami = 0;

function bolenTopla(number){
    for(let i = 1; i < number; i++){
        if(number % i === 0) bolenToplami += i
    }
    return bolenToplami
}
console.log(bolenTopla(sayi));
  */

/* let radius = +prompt("Yaricap giriniz: ")

function perArea(radius){
    let per = (Math.PI * 2 * radius).toFixed(2);
    let area = (Math.PI * (radius**2)).toFixed(2);

    return `Perimeter: ${per}, Area: ${area}`
}

console.log(perArea(radius)); */


// Asal mi degil mi?

/* const number = +prompt("Bir sayi giriniz: ");
let asalMi = true;

function isPrime(number){
    for (let i = 2; i < number / 2; i++) {
        if (number % i == 0) {
            asalMi = false;
            break;
        }
    }
    return asalMi ? `${number} asal bir sayidir` : `${number} asal sayi degildir`;
}

console.log(isPrime(number)); */

//ilk iki sayiyi carpip ücüncüsünü üs olarak alan fonksiyon

/* function islem (n1, n2, n3) {return (n1*n2)**n3;}
console.log(islem(5,3,2)); */


//!100-1000 arasindaki palindrom sayilari bulunuz

//!Mükemmel sayiyi bulan fonksiyonu

/* let sayi = 6;
let bolenToplami = 0;

function mukemmelMi(number){
    for(let i = 1; i <= number; i++){
        if(number % i === 0) bolenToplami += i
    }
    return bolenToplami === number*2 ? `${number} mükemmel sayidir.` : `${number} mükemmel sayi degildir.`
}

console.log(mukemmelMi(sayi)); */


/* let fal = (jobTitle, geolocation, partner, numkids) => {

} */




let sayi = 120;

function bolenler(number){
    for(let i = 1; i <= number; i++){
        if(number % i === 0) console.log(i);
    }
    
}
bolenler(sayi);