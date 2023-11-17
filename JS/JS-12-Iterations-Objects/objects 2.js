//! Diziler sıralı bellek bölgeleridir ve sıralı bir şekilde ulaşılabilir. Ama daha karmaşık veriler için Object kullanılır

//! Objectlerde key-value ( Property-value) yapısı kullanılır

//! Herhangi bir veriye erişim için property (key) adı kullanılır.


/* -------------------------------------------------------------------------- */
/*                         OBJECT OLUSTURMA YÖNTEMLERI                        */
/* -------------------------------------------------------------------------- */

//1. new operatörüyle üretme


const car = new Object();
car.brand = "BMW"
car.model = 2000;
car.isCrashed = true;

console.log(car);


// 2. Costructor ile olusturma

function Personal(id, ad, maas){
    this.id = id
    this.ad = ad
    this.maas = maas
}

const p1 = new Personal(212, "Necati", 3500)
console.log(p1);

const p2 = new Personal(213, "Mugime", 3900)
console.log(p2.maas);


//3. metod: Object Literal Yöntemi

const personalKayit = {
    name: "Hans", 
    surname: "Frank", 
    dateOfBirth: 1978, 
    drivingLicence: true, 
    workExp:["tester", "developer","team lead"], 
    address:{city:"Nottingham", street: "Queen Street", postalcode: 23465},
    calculateAge: function(){
        return new Date().getFullYear() - this.dateOfBirth  //Bunu koymazsan dateOfBirth'ü bulamaz
    },
    formattedAge: () => {
        return `${this.name}'nin yasi ${this.calculateAge()}'dir.`
    }       

    // Arrow  functionlar içindeki this keywordü glocal scope gösterir.
    // Arrowfunc temel amacı this keywordündne kurtulmak için çıkartılmış bir özelliktir. Bundan dolayi bu yerlerde arrow function kullanmayiz. Bundan dolayi formattedAge calismiyor
}

console.log(personalKayit.calculateAge());

console.log(personalKayit.address.city);

console.log(personalKayit.formattedAge());



