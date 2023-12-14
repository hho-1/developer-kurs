
//       1. Yöntem
const empty = []
const names = ["Ayse", "Fatma", "Hayriye", "Mugime"]
console.log(names);

//       2. Yöntem
const numbers = new Array(10)             //   10'u boyut olarak algiliyor
const numbers1 = new Array(10,8,9,0,2)    //   Sayilar arrayin elemanlari
console.log(numbers);
console.log(numbers1);


//       3. Yöntem
const num = Array.of(5,4,6,7,6,8)
console.log(num);

/* **************  Arraylerden Veri Okuma ++++++++++++++ */

console.log(names[2]);

for(let i = 0; i <= names.length - 1; i++){
    console.log(names[i]);
}

let sum = 0;
for(let i = 0; i <= num.length - 1; i++){
    sum += num[i]
}
console.log(sum);

for(let i = 0; i <= names.length - 1; i++){
    console.log(names[i].toUpperCase());
}

names[names.length - 1] = "Saziment";    // Son ismi degistir, saziment yap demis olduk. kaydirma yapmiyor
names[names.length] = "Mugime";          // Bu kod hep en sona eleman ekler


//! dizi const ile tanımlansada içindeki veriler değiştirelbilir.
//! diziler primitive dğil non-primitive değişkenlerdir. Bu nedenle bir dizi ismine birde referans numarlarına sahiptir.Bu referanslar ile o değerlere ulaşılır.
//! bigisayarda dizinin adı  dizi bir stack alanında tutarken içindeki veriler heap denilen bir alanda tutulur.
//! Bu nedenle const sadece stack alanında tutulan ismin değişmesini engeller


/* Arrays can hold different type of variables.   */

const arr = ["Henry", "Sam", 3, 56, 67, new Date().getFullYear(),true, num]

console.log(arr);

console.log(arr[7][4]);     // Icice olan arraylerde ic elemanlara bu sekilde ulasiyoruz

console.log(++arr[7][4]);   // Bu elemani bir artirdi
console.log(num);
console.log(arr);           // Bu degismedi gibi 
 

/* -------------------------------------------------------------------------- */
/*                          ARRAY DEGISTIREN METODLAR                         */
/* -------------------------------------------------------------------------- */

console.log(names);
//names.pop();         // ----------------->Sonuncu elemani siliyor
console.log(names);


/* -------------------------------------------------------------------------- */
/*                   pop() -------> son elemani siler 
                     push()  --------> Sona bir eleman ekler. Dizinin eleman sayisini da dondurur*/
/* -------------------------------------------------------------------------- */


const cars = ["BMW", "Mercedes", "Toyota", "Seat"]
console.log(cars);
cars.push("Cupra")
console.log(cars);


// Kullanicidan 5 adet kullanici adi alip arraye yazdiran program

/* const userName = []
for(let i = 0; i < 5; i++){
    let names1 = prompt("Kullanici adi giriniz: ")
    userName.push(names1)
}
console.log(userName); */

console.clear();

/* -------------------------------------------------------------------------- */
/*        shift ve unshift metodlari ile bastan silme ve ekleme yapilir       */
/* -------------------------------------------------------------------------- */

cars.shift();
console.log(cars);

cars.unshift("Jaguar")
console.log(cars);


// splice istenilen bir yere istenilen bir elemani ekler. 3 parametre alir.

cars.splice(2, 0, "Trabant")      //öteleme yapti, o elemani silmedi
console.log(cars);


cars.splice(2, 1, "Volvo")        // 2. endeksteki elemani sildi, yerine bunu koydu
console.log(cars);


/* -------------------------------------------------------------------------- */
/*                          reverse tersten yazdirir                          */
/* -------------------------------------------------------------------------- */

cars.reverse()
console.log(cars);      // kalici degisiklige sebep olur

/* -------------------------------------------------------------------------- */
/*                             sort siralama yapar                            */
/* -------------------------------------------------------------------------- */

cars.sort()           //Alfabetik siralama yapar, sayilarda bile!!!!!!
console.log(cars);

const numberList=[23,45,12,1,46,78,21,2]    //Buradaki siralamada hata yapiyor. Ilk rakama göre siraliyor. 2, 10'dan sonra gelir

numberList.sort()
console.log(numberList);
numberList.sort((a,b) => a-b)       // Bunu yaparsan artik sayilari dogru siralar. Sayilari ikiser ikiser karsilastirip siraliyor
console.log(numberList);


//       Median Bulma

let ortanca = 0;
if(numberList.length % 2 === 0){
    ortanca = (numberList[numberList.length/2 - 1] + numberList[numberList.length/2])/2
}
else{
    ortanca = numberList[numberList.length / 2]
}
console.log(ortanca);



let nums = ["5", "2", "-3", "10"]
nums.sort()
console.log(nums);        // Sonuc -3, 10, 2 ,5    seklinde cikiyor




// Bir arraydeki acikligi bulduran program, yani maksimum - minimum

numberList.sort((a,b) => (a-b))
let range = numberList[numberList.length - 1] - numberList[0]
console.log(range);


//Bir arrayin ortalamasini bulduran bir fonksiyon yazalim

let list = [5,-3,7,11,-6,0,4,13,14]

let sum1 = 0;
let avg = (liste) => {
    
    for(let i = 0; i < liste.length; i++) sum1 += liste[i]
    
    return sum1 / (liste.length)
}
console.log(avg(list));


/* -------------------------------------------------------------------------- */
/*                          concat - array birlestirme                        */
/* -------------------------------------------------------------------------- */

let arr1 = [1,2,"3", "dört"]
let arr2 = [5,6,7]
console.log(arr1.concat(arr2));

/* -------------------------------------------------------------------------- */
/*                                  includes                                  */
/* -------------------------------------------------------------------------- */

console.log(arr1.includes("dört")); 
console.log(arr1.includes(4)); 

console.log(arr1[3].includes("rt"));    //elemanin icine girip kontrol ettik, true verir

/* -------------------------------------------------------------------------- */
/*                             indexOf,LastIndexOf                            */
/* -------------------------------------------------------------------------- */


/* -------------------------------------------------------------------------- */
/*          join() dizi elelmanlarını birleştirip stringe dönüştürür          */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                  toString                                  */
/* -------------------------------------------------------------------------- */
// dizi elemanları arasına virgül koyarak birleştirip string haline dönüştürür

