
//!DATE OBJECT


const now = new Date();
console.log(now);

const year = now.getFullYear();
console.log(year);

const month = now.getMonth();      //Sonucun indexini verir.
console.log(month);

const day = now.getDay();          //Pazar 0 olacak sekilde index degerini verir.
console.log(day);

const hour = now.getHours();
console.log(hour);

const minute = now.getMinutes();
console.log(minute);

console.log(`${hour}:${minute}`);

//Dogum yili hesaplama

//let birthYear = +prompt("Dogum yilinizi giriniz: ")    //   + isareti string gelen veriyi numbera ceviriyor
//console.log("Yasiniz: ", year-birthYear);

console.clear();


