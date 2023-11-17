/* const selamla = (ad) => `Merhaba ${ad}`
console.log(selamla("Necati"));


const greeting = (isim) => {
    return `Hello ${isim}`
}
let a = greeting("Anna")
console.log(`${a} nasilsin görüsmeyeli?`);



let toplam = (k,l) => `Toplam = ${k+l}`
console.log(toplam(4,8));

let bol = (x,y) => `Bölüm = ${x/y}`
console.log(bol(6,3)); */

//Silindirin hacmini bulduran fonksiyon

/* const r = +prompt("Yaricap: ")
const h = +prompt("Yükseklik: ")

let hacim = (r,h) => `Hacim = ${(Math.PI * r * r * h).toFixed(2)}`
console.log(hacim(r,h)); */

//Verilen 3 sayidan sonuncusu digerleri arasinda mi?

/* let n1 = +prompt("Alt sinir: ")
let n2 = +prompt("Üst sinir: ")
let n3 = +prompt("Test degeri: ")

let cond = (n1,n2,n3) => (n3 >= n1 && n3 <= n2) ? `${n3} ${n1} ile ${n2} arasindadir` : `${n3} ${n1} ile ${n2} arasinda degildir.`

console.log(cond(n1,n2,n3)); */


/* let date = new Date();
let hour = date.getHours();
let minute =  date.getMinutes();

let clock = (hour, minute) => `${hour}:${minute}`;
console.log(clock(hour, minute)); */



/* -------------------------------------------------------------------------- */
//! Rest Operatoru      ... 
// Arrow functionda rest operatoru
/* -------------------------------------------------------------------------- */
//const goster=(...numbers) => console.log(numbers);

//goster(3,4,7,89,45,34,23,56,78,90,34,43)

/* -------------------------------------------------------------------------- */
//! function declaration ve expression functionda arguments olarak kullanılır
/* -------------------------------------------------------------------------- */
/* const argumentsGoster = function(){
        console.log(arguments);
}

argumentsGoster(3,4,7,89,45,34,23,56,78,90,34,43) */

/* let area = +prompt("Ülkenin yüzölcümünü giriniz: ")
let worldArea = 148940000;

let percent = (area) => area/worldArea*100;
console.log(`Girdiginiz ülkenin yüzölcümü dünyanin yüzde ${(percent(area)).toFixed(2)}'ine karsilik gelmektedir.`);
 */

let carpim = 1;

let fakt = (sayi) => {
    for(let i = 1; i <= sayi; i++){
        carpim *= i;
    }
    return carpim;
}

console.log(fakt(7));

//!Ayni islem asagidaki gibi RECURSIVE fonksiyonla yapilabilir. Yani kendini yineleyen fonksiyon

function factorial(n){
    if(n===1) return n;
    else{
        return n * factorial(n-1);
    }
}
console.log(factorial(7));



let isim = "";

let message = (isim) => {
    
    let date = new Date();
    let day = date.getDay();
    let dayName;
    
    switch(day){
        case 0: 
            dayName = "Pazar"
            break
        case 1: 
            dayName = "Pazartesi" 
            break
        case 2: 
            dayName = "Sali"
            break
        case 3: 
            dayName = "Carsamba"
            break
        case 4: 
            dayName = "Persembe"
            break
        case 5: 
            dayName = "Cuma"
            break
        case 6: 
            dayName = "Cumartesi"
            break
    }
    return `${isim} bugün ${dayName}, okul var. 7.00'de kalkmalisin.`;
}
console.log(message("Sema"));




