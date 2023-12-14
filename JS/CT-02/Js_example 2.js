

let sayi1 = +prompt("1. sayi: ")
let sayi2 = +prompt("2. sayi: ")
let sayi3 = +prompt("3. sayi: ")

let max = sayi1;

if(sayi2 > max){
    max = sayi2;
}
if(sayi3 > max){
    max=sayi3;
}

console.log("Girilen sayilar: ",sayi1, sayi2, sayi3);
console.log("Maximum: ",max); 
