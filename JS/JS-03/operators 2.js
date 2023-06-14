let number1 = 85;
let number2 = 40;

console.log(number1-number2);

console.log(number1+number2);

console.log(number1*number2);

console.log((number1/number2).toFixed(2));

console.log(number1%number2);    //Kalani bul demek, yani modunu

console.log(number1++);          //kalici olarak 1 artirdi. Ama burada artirmamis gibi yazdirir. Önce degeri yazdirip sonra artirma islemini yapiyor. Artmis halini görmek icin tekrar yazdirmak lazim

console.log(number2--);          //kalici olarak 1 azaltti

console.log(number1-number2);    //Üstteki increment islemlerinden dolayi artik burasi 47 cikacak

console.log(number2**3);         //3. kuvvetini al demek

if(number2 % 2 === 1){
    console.log("Bu bir tek sayidir");       //Number2 artik 39 oldugu icin tek cikar
}
else{
    console.log("Bu bir cift sayidir");
}

/*let hours = +prompt("Bu is kac saatte tamamlandi: ")
let day = Math.trunc(hours/24);                  //trunc tam kismini al demek
let remainder = hours % 24;
console.log(`Bu is ${day} gün ${remainder} saatte tamamlandi.`);*/


console.log(++number1);   //Burada ise once artirir sonra yazdirir. Yani burasi 87 cikar



let sayi = +prompt("3 basamakli bir sayi giriniz: ")

const birler = sayi % 10;
const onlar = Math.trunc(sayi/10)%10;
const yuzler = Math.trunc(sayi/100)

console.log(`Sayinin rakamlari toplami: ${yuzler+onlar+birler}`);

