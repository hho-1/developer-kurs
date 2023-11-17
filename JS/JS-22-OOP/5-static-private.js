//* ======================================================
//*        OOP - Static and Private  (ES6)
//* ======================================================

//? Static degiskenler ve fonksiyonlar butun bir class'i ilgilendiren
//? verileri tutmak veya degistirmek icin elverislidir.

//?  nesnelerden bagimsiz sadece ilgili class' a ait bir degiskene
//? ihtiyac varsa o zaman static degisken kullanmak mantiklidir.

//! ENCAPSULATİON OOP'nin temel unsurlarindan birisidir.
//! Bir class icerisindeki degeri/durumu class disindan dogrudan ve
//! izinsiz erisimlere kapatmak icin kullanilir.

//! Encapsulation, private degiskenler ve private fonksiyonlar yardimiyla yapilir.
//! ES6 ve sonrasinda private degisken ve metotlari belirtmek icin
//! # (hash) kullanilir.

//! Private degiskenlere dogrudan erisilemezler. Bunlara erismek icin class
//! icerisinde tanimlanan public (genel) erisimli getter ve setter metotlar
//! kullanilir.

//! Private metotlara ise class disarisindan da erisilemez.
//! Private metotlara ancak class icerisindeki diger metotlar ile erisilebilir.


class Book{
    
    //private degisken tanimlamasi
    #id;

    //static degisken tanimlamasi
    static sayac = 0;
    
    constructor(title, author, year){
        this.title = title,
        this.author = author,
        this.year = year,
        this.#id = 44, 
        this.getirTitle = function(){
            return this.title
        }

        Book.sayac++
    }

    getId(){
        return this.#id                  // Bunu yazinca isteyene ver demek
    }

    setId(id){
        this.#id = id
    }

}

Book.sayac++

const book5 = new Book("simyaci", "ipek bilir", 1980)


console.log(book5);            // Burada id gözükür, ama direkt onun cocugu oldugu icin. baska bir yerden cagirdigimizda gözükmez
console.log(book5.id);         // Bunu bulamaz, private tanimlandigi icin
console.log(book5.getId());       // Bu sekilde getirtebiliriz

console.log(Book.sayac);

console.log(book5.title);

book5.title = "Nutuk"
console.log(book5.title);            // degisir

//book5.getId() = 55;               //Degistirmez. set metodu lazim

book5.setId("55")
console.log(book5.getId());        // Bu sekilde degirtirir