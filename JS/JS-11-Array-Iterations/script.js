let arr = [3, 5, 6, "sari", [6,5,3], "hello", 3.2, {name: "Salih", id:"24"}]

console.log(arr.length);

/* -------------------------------------------------------------------------- */
/*                                 FOR IN LOOP                                */
/* -------------------------------------------------------------------------- */


//Baslangic ve bitis degerlerini vermiyoruz

for(i in arr){
    console.log(arr[i]);
}


let students = [
    "Ali",
    "Ahmet",
    "Ömer",
    "Hasan",
    "Mehmet",
    "Nisa",
    "Ayse",
    "Alime",
  ];

const ogrenciBul = (isim) => {
    for(i in students){
        return students.includes(isim)
    }
}
console.log(ogrenciBul("Nisa"));


/* -------------------------------------------------------------------------- */
/*                                FOR OF LOOP                                 */
/* -------------------------------------------------------------------------- */

// Burada  for dan sonra verilen değişken direk olarak dizideki elemanı ifade eder.
// Yani bir dizideki elemanlara item deriz. Burda for of ile direk elemana(item) ulaşılır


for(i of students){
    console.log(i);          //Burada i'yi degil, direk o elemani yazdirir. for in ve normal for direkt olarak i'yi yazdiriyordu. 
}

//Soru: Ögrenci listesinde bas harfi A olanlari yeni bir listeye atan program

const basHarf = (array) => {
    
    let list = [];
    
    for(i of students){
        if(i[0] === "A"){
            list.push(i);
        }
    }
    return list;
}
console.log(basHarf(students));

console.clear();
/* -------------------------------------------------------------------------- */
/*                                   FOREACH                                  */
/* -------------------------------------------------------------------------- */

//forEach bir iteration metodudur, döngü degildir. Bir fonksiyonu deger olarak alir
// ve dizideki her elemana o fonksiyondaki islemleri yapip bir sonuc üretir.
//!     forEach return ile deger döndürmez. Direkt olarak fonksiyon icinde islemleri yapip bitirmen gerekiyor.


let personalList = ["Merve", "Sema", "Ayse", "Ali", "Ahmet", "Mustafa", "Hasan"]

personalList.forEach(
    function yazdir(isim){console.log(isim);}
)

//Listedeki elemanlari büyük yazdiralim

const upper = (isim) =>{
    console.log(isim.toUpperCase());
}

personalList.forEach(upper)

//Listedeki elemanlari tersten yazdiralim

const reverse = (x)=>{
    console.log(x.split("").reverse().join("")); 
}
personalList.forEach(reverse); 

console.clear();

let sayilar = [45,67,89,34,556,90]

sum = 0;



const topla = (sayi) => {
    sum += sayi;
}

sayilar.forEach(topla)
console.log((sum/sayilar.length).toFixed(2));

console.clear();

//forEach   avantaji, kullanimi normal forlara göre kisa olmasi
//          Dezavantaj: döngüyü kirmak mümkün degil. break continue kullanilmiyor

sum = 0;
personalList.forEach((x) => console.log(x.toUpperCase()))
sayilar.forEach((sayi) => sum += sayi)
console.log(sum);

personalList.forEach((name) => console.log(`Hosgeldin ${name}`))

console.clear();
//forEach bize endeks numarasini da verir

personalList.forEach((deger, index, arr) => console.log(deger, index));

personalList.forEach((isim, index) => console.log(`${isim} adli kisi ${index + 1}inci siradadir`))

console.clear()


//Bu listede adi Hasan olan kisinin index numarasini bul

personalList.forEach((deger, index, array) => (deger === "Hasan") ? console.log(index): null)

//maaslar dizisindeki her maasa %10 zam yapin

const maaslar = [5000, 7000, 15000, 12000]

maaslar.forEach(function(maas, index){console.log(`${index} numarali elemanin yeni maasi ${maas * 1.1}`)})

//maaslar.forEach((maas, index) => console.log(`${index} numarali elemanin maasi ${maas * 1.1}`))

//Bir listedeki tek sayilar dizisini teksayilara cift sayilar ciftsayilara aktaran program


let numbers = [45,34,23,12,78,67,89,90]
let tekSayilar = []
let ciftSayilar = []

numbers.forEach((item) => item % 2 === 1 ? tekSayilar.push(item) : ciftSayilar.push(item))
console.log(tekSayilar);
console.log(ciftSayilar);