/* -------------------------------------------------------------------------- */
/*                      OOP - Object Oriented Programming                     */
/* -------------------------------------------------------------------------- */

//   ************* OBJECT LITERALS  ************************


const book1 = {
    
    title: "Karamazov Kardesler",
    author: "Dostoyevsky",
    year: 1890,

    summaryFunction: function(){                                                               //this kelimesini arrow function ile birlikte kullanamiyoruz.
        console.log(`${this.title} kitabini ${this.year} yilinda ${this.author} yazmistir.`)
    }
    
}

console.log(book1);
book1.summaryFunction()

const book2 = {
    
    title: "Sözde Kizlar",
    author: "Peyami Safa",
    year: 1934,

    summaryFunction: function(){                                                               //this kelimesini arrow function ile birlikte kullanamiyoruz.
        console.log(`${this.title} kitabini ${this.year} yilinda ${this.author} yazmistir.`)
    }
    
}

console.log(book2);
book2.summaryFunction()


//? object literals yöntemi ile fazla sayıda yeni  Object ler oluşturmak oldukça zahmetlidir, ayrıca programcılık yaklaşımı açısından da çok tekrar içerdiği için uygun değildir
// DRY (Dont Repeat Yourself) Prensibi için uygun değildir
//? SOLUTION:  Object Constructor kullan (ES5 and ES6)

