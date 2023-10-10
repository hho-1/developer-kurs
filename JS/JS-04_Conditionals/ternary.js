// let age = 19;

// age >= 18 ? (console.log("Oy kullanabilirsin")) : (console.log("Oy kullanamazsin"))




//let number = 65;

// number % 2 ? (console.log("Sayi tek")) : (console.log("Sayi cift"))

//let message = number%2 ? ("Tek sayi girdiniz") : ("Cift sayi girdiniz")       //Bu da baska bir kullanim
//console.log(message);




// let pass = prompt("Password giriniz: ");

// let kontrol = pass === "12345?" ? ("Sisteme girebilirsin, sifre dogru") : ("Sisteme giremezsin, sifre yanlis")

// document.write(kontrol);




// let number = +prompt("Bir sayi giriniz: ");

// let message = number >= 0 ? (number === 0 ? "Sayi nötr" : "Sayi pozitif") : ("Sayi negatif")   //!Nested ternary

// document.write(message);


let sayi1 = +prompt("Birinci sayi: ")
let sayi2 = +prompt("Ikinci sayi: ")
let operator = prompt("Islem: ");

let sonuc = operator === "+" ? (sayi1+sayi2) : (operator === "-" ? sayi1-sayi2 : ("yanlis islem girdiniz."))

document.write("Sonuc = ", sonuc);