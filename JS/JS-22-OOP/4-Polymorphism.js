//* ======================================================
//*!b     OOP - Inheritance and Polymorphism(ES6)
//*         (kalıtım,miras)ve(çok biçimlilik)=============================================

//? Extends keyword ü, parent class ın işlevselliğini child class a genişletmek (extend) için kullanılır..(INHERITANCE)

//* Polymorphism  object-oriented programming concept li bir programlama kavramıdır,bir variable ın, nesnenin, yada fonksiyonun,birden çok form alma özelliğini ifade eder
//* In the OOP, Polymorphism genellikle  Overloading and Overriding le gerçekleştirilir (overriding=aynı ada sahip iki fonksiyon tanımlarsanız, tanımlanan sonuncusu önceden tanımlanmış sürümü geçersiz kılar ve fonsiyona her çağrı yapıldığında, son tanımlanan fonksiyon yürütülür.)(overloading=overloading demektir, javascriptte böyle denmez, aynı adlarla fonksiyonu işlemek denir ve js  direk overloading i desteklemez, manuel uğraşmak gerekir )


//?Burada da java'daki gibi overriding var. Ancak parent'in temel degiskenlerinde degisiklik yapamiyorsun. Degisiklik yapabilecegin degiskeleri prototype kismina yazman lazim
//?Javascript Overloading'i desteklemez. Dolayli yoldan ugrasarak yapilabilir.



class Book{
    constructor(a,b,c){
        this.title = a,
        this.author = b,
        this.year = c,
        this.ozetFunction = function(){
            return `${this.title} kitabini ${this.year} yilinda ${this.author} yazmistir.`
        }
    }
    yilHesapla(){
        return 2023 - this.year;             //Bunlar prototype alanina geliyor. Cagirmak optional
    }
}


//! *************************    OVERRIDING    ***********************

class Dergi extends Book{
    constructor(author, title, year, month){
        super(author, title, year)

        this.month = month;     //Derginin prototype'i
    }
    yilHesapla(){
        return `${this.title} dergisi ${2023 - this.year} yillik tarihe sahiptir.`
    }
}

const dergi4 = new Dergi("leman", "Some author", 1973, "february")

console.log(dergi4);

console.log(dergi4.yilHesapla());      // Bunu override ettigimiz yeni yerden aliyor


//! ***************************** OVERLOADING **************************

function getir(arg1){
    console.log(arg1);
}

function getir(arg1, arg2, arg3){
    console.log(arg1, arg2, arg3);
}

getir("naber")                    //Diger dillerde tek parametreli gönderince bunu cagirdigimizi anliyordu. Ama Javascriptte ayni isimdeyseler sonuncu gecerlidir, digerleri iptal olur. if'li sekilde tek parametre varsa sunu al, cok varsa bunu al diyebilirsin, ama o da uzun is
getir("naber", "nasilsin", "iyi misin")