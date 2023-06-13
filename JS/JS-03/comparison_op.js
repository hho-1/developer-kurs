let num1 = 3;
let num2 = "3";

console.log(num1 == num2);    //Burada tek = kullanamayiz. Cünkü = atama islemi yapar, karsilastirma degil.
//Ayrica burasi denklik demek oldugu icin true döner.

console.log(num1 === num2);   // Bu mutlak esitlik demek, onun icin false cikar.
//Burasi strict equality demek oldugu icin false cikar. Cünkü kesinesitlik yok, tipler farkli

let num3 = "five";
let num4 = 5;

console.log(num3 == num4);   //tabii ki false cikar. five sadece bir yazidir

let lang1 = "Javax";
let lang2 = "Python";

console.log(lang1 == lang2);   //false cikar

let lang3 = "Python";
let lang4 = "Python";

console.log(lang3 === lang4);  //true

console.log(num1 != num2);     // false, cünkü bunlar denk
console.log(num1 !== num2);    // true, cünkü bunlar birbirine birebir esit degil

console.log(5 >= 4);        //Karsilastirma operatörleri bildigimiz gibi



