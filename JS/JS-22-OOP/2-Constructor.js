//* ======================================================
//*          OOPS- Object Constructor (ES5)
//* ======================================================

//* Object Constructor
//* Javascript is a prototype-based language.
//* Tüm JavaScript nesneleri, bir prototipten (ilk örnek)özellikleri ve yöntemleri devralır (inherit)
//* Object prototipi, prototip miras zincirinin en üstündedir.(Hz. Adem)
//* For example, Date and Array objects,   Object prototype den devralır

//* Object Constructor
//! Book ismi büyük harfle,constructor olduğu biz tarafından anlaşılsın diye. anne karnında bebek var doğarsa değeri olur (üstte constructor anne karnındaki bebek, altta book1 oluşturmak=bebeğin doğması)
//!arrow function this keyword unu desteklemediği için burada function decleration yazımını tercih ettik


function Book(title, author,year){
    this.title = title;
    this.author = author;
    this.year = year;
    this.sumFunction = function (){
        return `${this.title} kitabini ${this.year} yilinda ${this.author} yazmistir.`
    }
    //console.log(this);
}


const book1 = new Book("Kazaklar", "Tolstoy", 1895)
console.log(book1);
console.log(book1.sumFunction());

const book2 = new Book("Gün Olur Asra Bedel", "Aytmatov", 1975)
console.log(book2);
console.log(book2.sumFunction());


Book.prototype.type = "roman"
Book.prototype.calculateYear = function(){
    return 2023 - this.year;
}

console.log(book1.type);
console.log(book2.calculateYear());


// Prototype: Bellekte yer kaplamayan ama cagrildiginda gelen fonksiyonlara denir.
// Günümüzde cok az kullanilmaktadir.

/* -------------------------------------------------------------------------- */
/*                                 INHERITANCE                                */
/* -------------------------------------------------------------------------- */

function Dergi(title, author, year, month){
    
    Book .call(this, title, author, year)

    this.month = month
}

Dergi.prototype = Object.create(Book.prototype)

const dergi1 = new Dergi("times", "xyz company", 1960, "september")

console.log(dergi1);
console.log(dergi1.calculateYear());
console.log(dergi1.sumFunction());

//*Book object inden (kalıbından) türetilen Dergi kalıbına, Book un prototype alanındaki bilgiler (ES5 te) direk gelmez,gelmesini istiyorsak alttaki kodu (daha child oluşturmadan önce)yazmalıyız
