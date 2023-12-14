const variableName = "x";
console.log(variableName, "gayet kullanisli bil dil");
//alert(variableName)

const sayi=45;
console.log(sayi+52);

/*const ve let ES6 ile 2015'te gelen özellikler. Öncesinde var vardi. Verimlilik acisindan const ve let kullanmak daha mantikli*/

var text="Bu var ile olusturulan bir degisken"
console.log(text);


const number=200;
//number=400;   //Bunu yapmayacak. Cünkü const ile tanimlanan degisken sabittir. constant'tan geliyor.


//GLOBAL VE LOKAL SCOPE

//? Global Scope: Program içerisinde fonksiyonların dışında tanımlanan ve her yerden erişilebilen scope tipidir.
//? Kodu yamaya bağladığımızda global scope yazarız.SAdece tek global scope var.

const global="Bu bir global degisken"
{
    const local = "Bu bir lokal degisken"

    console.log(local);  //Ulasilabilir. Ayni noktadayiz cünkü
    console.log(global); //Buna da ulasilabilir. Global oldugu icin
}
console.log(global);   //ulasilabilir, herkes tarafindan
console.log(local);    //Buna ulasilamaz.



let kisi=330;
kisi=550;     //BUNU YAPAR CÜNKÜ LET DEGISTIRILEBILIR.
console.log(kisi);

{
    let ad="Helen"
    var soyad="Kut"
}

console.log(ad);     //Buna ulasamaz.

console.log(soyad);     //BUNA ULASABILIR. VAR DEGISKENLERE ULASILABILIYOR. LOKAL OLSA DA


{
    let isim="Saniye"
    let okulNo=35
}

console.log(okulNo);   //Tanimayacak


{
    let isim="Saziment"
    console.log(isim);   //Üstteki lokal burayi ilgilendirmiyor. Burada da ayri bir isim olusuyor. Digerinin uzerine yazmaz.
}




//*******************DEGISKEN TÜRLERI */

let toplam = 10;
console.log(typeof toplam);

toplam = 10+10;
console.log(toplam);


let str="10. eleman"

console.log(str+"cok basarili oldu.");     //!Concatenation islemi - string birlestirme


let kontrol = false;

console.log(kontrol)
console.log(typeof kontrol);

