
//1000 ile 2000 arasindaki sayilardan 13'e bölümünden kalan 3 olan sayilari konsola yazdiralim

/* for (let i = 1000; i <=2000; i++){
    if(i % 13 === 3){
        console.log(i);
    }
} */

//Kullanicidan alinan 5 adet sayinin ortalamasini konsola yazdir

/* let toplam = 0;
for (let i = 1; i <= 5; i++){
    let sayi = +prompt("Bir sayi giriniz: ");
    toplam += sayi;
}
console.log(toplam/5); */

//Negatif sayi girilene kadar girilen sayilari toplayan program

/* let toplam = 0;
let sayi;
do{
    sayi = +prompt("Sayi giriniz: ")
    if(sayi < 0 ) break;
    toplam += sayi;
}while(true)                              //0'dan büyükse yerine true dedik, cünkü break zaten sifirdan kücük olunca cikar

console.log(toplam); */


//! 7- sizden 1'den 100'e kadar sayıları konsola yazdırmanız istenmektedir ancak 3'ün katlarına gelince 'Fizz', 5'in katlarına gelince 'Buzz' yazacak. Hem 'ün hemde 5'in katına geldiğinde ise 'FizzBuzz' yazdırmanız istenmektedir.

/* for (let i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    }
    else if(i % 3 === 0 && i % 5 !== 0){
        console.log("Fizz");
    }
    else if(i % 3 !== 0 && i % 5 === 0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
} */

// Girilen bir sayinin basamak sayisini bulduran kod

/* let sayi = +prompt("Sayi giriniz: ");
let count = 0;
while(sayi != 0){
    sayi = Math.trunc(sayi/10);
    count++;
}
console.log(`Girdiginiz sayi ${count} basamakli`); */


//Kac tane fibonacci

/* const number = +prompt("Kac adet fibonacci sayisi istiyorsunuz?")

let n1 = 0;
let n2 = 1;
let n3;

for (let i = 1; i <= number; i++){
    
    console.log(n1);
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
} */

/* let star = "";

for (let i = 1; i <= 5; i++){
    for(let j = 1; j <= 5; j++){
        star += "* ";
    }
    star += "\n";
}
console.log(star); */


//Girilen değerlerin üçgen oluşturp oluşturamayacağını bulan program
// NOT: Üçgen olma şartı : iki kenar toplamı daima 3. keanrdan büyük olmalı

/* let a = +prompt("Kenar-1: ")
let b = +prompt("Kenar-2: ")
let c = +prompt("Kenar-3: ")

let check1 = a + b > c;
let check2 = a + c > b;
let check3 = c + b > a;

if(check1 && check2 && check3) {
    console.log("Bu sayilar bir ücgen olusturabilir.");
}
else{
    console.log("Bunlardan ücgen olmaz.");
} */



