
// let sum = 0;

// for (let i = 1; i <= 10; i++){
//     sum += i;
//     console.log(i);      //1'den 10'a kadar sayilari konsola yazdirma
// }

// document.write(sum);     //1'den 10'a kadar sayilari toplama


// 1'den 100'e kadar sayilari toplama ************************************************************+
// let sum = 0;
// for (let i = 1; i <= 100; i++){
//    sum += i;  
//  }
// document.write(sum);


//1'den 100'e kadar olan cift sayilari toplayan program************************************************************+

// let sum = 0;
// for (let i = 1; i <= 100; i++){
   
//     if(i % 2 === 0){
//         sum += i;
//     }
      
// }
// document.write(sum);


// Ayni islemi ternary operatörü ile yapan program************************************************************+

// let sum = 0;

// for (let i = 1; i <= 100; i++){
//     i % 2 === 0 ? sum += i : null;
// }
// console.log(sum);


//Faktoriyel************************************************************+***********

// let fakt = 1;
// let number = +prompt("Lütfen bir tamsayi giriniz: ")
// for(let i = 1; i <= number; i++){
//     fakt *= i;
// }


//console.log(fakt);


// 3 basamakli Armstrong numbers************************************************************+*************

// 




//Carpim tablosu****************************************************************************

//for (let i = 1; i <= 10; i++){
//    for(let j = 1; j <= 10; j++){
//        console.log(`${i} x ${j} = ${i*j}`);
//    }
//}


//1'den 100'e kadar Asal Sayilar******************************************************************

// for(x = 2; x <= 100; x++){
//     let count = 0;
//     for(let i = 2; i < x / 2; i++){
//         if(x % i === 0) count++;
//     }
//     count === 0 ? console.log(x) : null;
// }





//********************** WHILE LOOP ******************************************/

// For loop ile benzer şekilde sadece syntax farklılığı vardır.Birbirini yerine kullanılabilir

// genelde daha komplex bir şart durumu varsa o zaman kullanmak avantajlı olabilir

// while(Koşul) {
//      çalıştırılacak kodlar
//   }

//*************** 1 ile 10 arasi sayilari yazdirma *************************/

// let i = 0;
// while(i<=10){
//     console.log(i);
//     i++;
// }

//********************* Ornek ****************************** */
// let number = 100;

// while(number >= 100 && number <= 200 ){
//     number = +prompt("Bir sayi giriniz: ");
//     console.log(number);
// }
// console.log("deger 100 ile 200 arasinda degil");



// Kullanıcıdan 1-100 arasında not girmesini isteyen
 // Farklı bir değer girerse 1-100 arasına not girene kadar zorlayan program



//  let not = +prompt("Not girin.");
//  while(not < 0 || not > 100){
    
//     not = +prompt("Girdiginiz deger 1 ile 100 arasinda olmalidir: ")

//     if(not <= 50) break;

//  }



//Girilen sayinin kac basamakli oldugunu bulan programi While Loop ile yaziniz.

//******************  DO-WHILE LOOP **********************************/

//? Kullanıcıdan vize ve final notlarını isteyen ve vizenin %40 ını finalin %60 ını alarak 
//? notunu hesaplayan her işlem bittiğinde devam etmek isteyip istemediğini soran program


// let total;
// let isContinue = "";

// do {

//     let vize = +prompt("Vize notunu giriniz: ");
//     let final = +prompt("Final notunu giriniz: ");
//     total = vize * 0.4 + final * 0.6;
//     console.log(total);

//     isContinue = prompt("Yeni not hesaplansin mi: ");

// }while(isContinue === "e" || isContinue === "E")







