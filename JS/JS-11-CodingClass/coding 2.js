let isimler = ["harvey", "helen", "ethan", "mark"]
let bos = []

console.log(typeof isimler);
console.log(typeof isimler[1]);
console.log(Boolean(isimler));
console.log(Boolean(bos));


//String icindeki sesli harfleri bulan fonksiyon

let cumle = "Hava bugün cok güzel"
let yazi = ""

let sesli = (yazi) => {
    for(let i = 0; i < yazi.length; i++){
        if(yazi[i].match(/[aeıioöuü]/gi)) console.log(yazi[i]);
    }
}

sesli(cumle);



// Bir dizi icindeki maximum sayiyi bulan fonksiyonu yaziniz

let arr = [3,4,5,6,7,8,9,10]

let max = (sayilar) => {

    let max = 0;
    for(let i = 0; i < sayilar.length; i++){
        if(sayilar[i] > max){
            max = sayilar[i]
        }
    }
    return max;
}
console.log(max(arr));

//Ikinci bir yöntem asagida

/* let sayi = [3,5,8,2,1];

sayi.sort((a,b)=>a-b);

console.log(sayi[sayi.length-1]); */


//!Bir dizi icindeki sayilari toplayan fonksiyonu yaziniz

let arr1 = [3,4,5,6,7,8,9,10]
let sum = (sayilar) => {

    let sum = 0;
    for(let i = 0; i < sayilar.length; i++){
        sum += sayilar[i]
    }
    return sum;
}
console.log(sum(arr1));


//!Bir dizi icindeki sayilarin ortalamasini bulan fonksiyonu yaziniz

let avg = (sayilar) => {

    let sum = 0;
    for(let i = 0; i < sayilar.length; i++){
        sum += sayilar[i]
    }
    return sum/sayilar.length;
}
console.log(avg(arr1));


//Girilen bir dizideki kelime sayisini bulan fonksiyon

let text = "Hava nasil oralarda, üsüyor musun?"

function kelimeSayisi (yazi){
    let bolunmus = yazi.split(" ");
    return bolunmus.length;
}
console.log(kelimeSayisi(text));


//! 6- Bir cümleyi alın ve kelimeleri ters sırayla birleştirerek yeni bir cümle oluşturun.

let text1 = "Javascript harika bir dil"
let terstenYaz = (yazi) => {
    let bolunmus = yazi.split(" ");
    return bolunmus.reverse().join(" ")
}
console.log(terstenYaz(text1));


//! 7- Soru: Bir isim listesi oluşturmak istiyorsunuz. İlk başta boş bir diziyle başlayın. Kullanıcıdan klavyeden  isimleri alarak listeye ekleyin. Kullanıcı 'q' tuşuna basana kadar isim eklemeye devam edin. Kullanıcı 'q' tuşuna bastığında en son eklediği ismi listeden çıkarın ve sonuçları konsola yazdırın.

/* let isimListesi = []
let isim;
do{
    let isim = prompt("Isim giriniz: ")
    
    if(isim === "q") {
        isimListesi.pop(); 
        break;
    }

    isimListesi.push(isim);

}while(isim !== "q")

console.log(isimListesi); */


//! 8- kullanıcının isim ve doğum tarihi değerlerini parametre olarak alan ve kullanıcın yaşını hesaplayan fonksiyonu function declaration ve arrow function ile yazınız

/* let name = prompt("Isim giriniz: ")
let dogum = parseInt(prompt("Dogum tarihiniz: "))

let yasBul = (isim, dogumTarihi) => {
    let date = new Date();
    let year = date.getFullYear();
    let age = year - dogumTarihi;
    return `${isim} ${age} yasinda`
}
console.log(yasBul(name, dogum)); */


//! 9- isimler dizisin içerisindeki her ismi küçük harf olarak yeni bir diziye saklayınız.

let isimler2 = ["Cabbar", "Kamil", "Hicabi","Saziment","Ayse", "Fatma", "Hayriye"]

let newArr = []

for(let i = 0; i <isimler2.length; i++){
    newArr.push(isimler2[i].toLowerCase())
}
console.log(newArr);


//! 10- Bir sayının faktöriyelini hesaplayan bir fonksiyon yazınız.

let faktoriyel = 1;
let numb = 7;
let fakt = (sayi) => {
    for(let i = 1; i <= sayi; i++){
        faktoriyel *= i;
    }
    return faktoriyel;
}
console.log(fakt(numb));










