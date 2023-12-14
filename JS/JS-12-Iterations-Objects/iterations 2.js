/* let arr = [3,4,5,6,7,8,9,10]

arr.forEach(function sayiYaz(sayi, index){
    console.log(`${index} endeksli sayinin karesi ${sayi**2}`);
}) */

/* -------------------------------------------------------------------------- */
/*                                    MAP()                                   */
/* -------------------------------------------------------------------------- */

//Map bir diziyi alir, parametre olarak verilen fonksiyonu her elemana uygular ve geriye yeni bir array döndürür.

//Orijinal diziyi degistirmez.
//forEach()'den farki geriye sonuc döndürmesi
//Kac eleman girerse o kadar eleman cikar

let hastaKayit = ["Hans","John", "Toni", "Joni", "Herkel", "Frank", "Ayse", "Fatma", "Hayriye"]

console.log(hastaKayit.forEach(function(x){
    return x.toUpperCase()                            //Bu undefined cikar
}));



console.log(hastaKayit.map(function(x){
    return x.toUpperCase()                            //Bu calisir, deger döndürür
}));

const listUpper = hastaKayit.map((x) => x.toUpperCase())
console.log(listUpper);


const isCheck = hastaKayit.map((item) => item === "Toni" ? true:false)
console.log(isCheck);



// TL dizinindeki değerlerin euro ve dolar karşılıklarını hesaplatarak dizilere aktarın

const tl=[400,500,800,1230,2300,4500]
const dolar=23.300
const euro=25.400

let cevirDolar = tl.map((item) => (item/dolar).toFixed(2)+"$")
let cevirEuro = tl.map((item) => (item/euro).toFixed(2)+"€")

console.log(cevirDolar);
console.log(cevirEuro);



//Asagidaki arraydeki sifat sonlarina ly eki ekleyin

const adj = ["clever","meek","hurried","nice"]

let adverbs = adj.map((item) => console.log(`${item}ly`))

console.clear()


//Uzantilari silerek sadece isimler kalacak
const ext = ["results.pdf", "document.doc","index.html"]

let isim = ext.map((item) => item.split("."))
isim.forEach((item) => console.log(item[0]))


/* -------------------------------------------------------------------------- */
/*                                   FILTER                                   */
/* -------------------------------------------------------------------------- */


// Filtreleme işlemi yapar
// filter dizideki elemanlardan verilen fonksiyondaki şarta uyanları yeni bir diziye aktarıyor 


const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const negative = array.filter((item) => item < 0)
console.log(negative);

const positive = array.filter((item) => item > 0 )
console.log(positive);


//Hastakayit listesinde bas harfi h olanlari ayri bir listeye alan program

const basHarf = hastaKayit.filter((item) => item[0] === "H")
console.log(basHarf);

const upperA = hastaKayit.filter((x)=> x[0] ==="H").map((x)=> x.toUpperCase()).filter((x) => x.length === 4)  //icice 3 adet map ve filter kullandik. Buna chaining deniyor
console.log(upperA);                                                                                            //burada forEach kullanamayiz. forEach deger döndürmedigi icin Chaining yapilmaz



//Asgari ücretten az olanlara %10 zam yap


const maas = [4000, 12000, 3000, 20000, 15000,10000]

let asgari = 8500

let zam = maas.filter((item)=> item < asgari).map((x) => Math.trunc(x * 1.1))
console.log(zam);


console.clear()



/* -------------------------------------------------------------------------- */
/*                                   REDUCE()                                 */
/* -------------------------------------------------------------------------- */

//? Tek bir değer dönderir
//? dizideki bütün elemanları toplama gibi işlemlerde kullanmak gibi

//? İki parametre vermek zorunlu (bu iki parametre dizide ardışık elemanları kasteder.Biri önceki ve sonraki gibi)

// acc  başlangıç değeri gibi, sum olarak kullandığımız değişken gibi düşünebilirsiniz.Bu nedenle o değerin kaçtan başlayacağını verebiliriz.

console.log(maas.reduce((sum, item) => sum+item))   //item'lari sum'a ekleye ekleye gidiyor


const statement = ["Bugün ", "hava ", "sicak"]
console.log(statement.reduce((st, item) => st + item));


console.log(statement.reduce((st, item) => st + item, "Hey "));  //Bu sekilde bir baslangic degeri de verebiliyoruz


const numbers = [3,6,8,9]

const squareTotal = numbers.reduce((total, item) => {
    total.push(item**2)
    return total
},[])                             // Burada [] koymazsak islemi yapmaz. Cunku baslangic degeri vermezsen primitive bir degiskene push() yapmaya calisiyorsun gibi algilar. Biz bunun baslangic degerine bos bir array verip push() yapmaya imkan tanidik.
console.log(squareTotal);



/* -------------------------------------------------------------------------- */
/*                                    some()                                  */
/* -------------------------------------------------------------------------- */
// O şartı sağlayana en az bir eleman varsa true değer döndürür
const array1 = [1, 2, 3, 4, 5];

console.log(array1.some( (element) => element % 2 === 0));



/* -------------------------------------------------------------------------- */
/*                                    every()                                 */
/* -------------------------------------------------------------------------- */
// o şartı bütün elemanlar sağlıyorsa true dönderir
const array2 = [1, 30, 39, 43, 10, 13,45];

console.log(array2.every((currentValue) => currentValue < 40));


/* -------------------------------------------------------------------------- */
/*                                    find()                                  */
/* -------------------------------------------------------------------------- */
// bir değer arattırıldığında sadece ilk bulduğunu yazdırır.

console.log(array2.find((currentValue) => currentValue > 40));