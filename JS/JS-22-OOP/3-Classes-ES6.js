//* ======================================================
//*             OOP - Classes (ES6)
//* ======================================================

//? Classlar,  objects oluşturmak için template (şablondur).
//? JS deki Classes,   prototypes üzerine kuruludur,  aynı zamanda ES5 syntax ından farklı bazı syntax and semantics e sahiptir .
//? Aslında  class keyword ü  ES6 da tanıtılmıştır, but is syntactical sugar (yalnızca dili kullanmanın bazı yönlerini daha kolay ve genel olarak daha keyifli hale getirmek için eklenen bir dil özelliği için kullanılan bir terimdir.), JavaScript  prototype-based dir.

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

const book3 = new Book("Safahat", "M. Akif Ersoy", 1932)
console.log(book3);
console.log(book3.ozetFunction());
console.log(book3.yilHesapla());


// INHERITANCE

class Dergi extends Book{
    constructor(author, title, year, month){
        super(author, title, year)

        this.month = month;
    }
}

const dergi3 = new Dergi("economist", "British Council", 1955, "october")    //Bu siralamayi parent classa göre yaptigina dikkat et!!!
console.log(dergi3);
console.log(dergi3.ozetFunction());
console.log(dergi3.yilHesapla());

class Gazete extends Dergi {
    constructor(author, title, year, month, b) {
      super(author, title, year, month);
      this.fiyat = b;
    }
}
  
const gazete = new Gazete("sabah","aziz nesin", 1969, "aralik",50)
console.log(gazete);