/* -------------------------------------------------------------------------- */
/*                                SHORT CIRCUIT                               */
/* -------------------------------------------------------------------------- */

console.log("isci" || "memur" || "avukat");        //ilk gördügü true'yu döner

console.log("isci" && "memur" && "avukat");        //Sona kadar kontrol eder, son true'yu verir


const personel = {
    name: "Sucettin",
    age: 57,
    job: "",
    drivingLicence: true
}

console.log(personel.job || "unemployed");         // Meslegi var mi diye kontrol et, yoksa issiz yaz

console.log(!personel.drivingLicence || "ise alinma sartlarini karsilamiyorsunuz.");

/**************************************************************************** */
/* -------------------------------------------------------------------------- */
/*                           SELF INVOKING FUNCTION                           */
/* -------------------------------------------------------------------------- */

(function (){console.log("Kendi kendini cagiran fonksiyon icindeyim");})();   //Bunun adi anonymus function, en sondaki parantez kendi kendini cagirmasini sagliyor.

// Bu fonksiyonlar da parametre alabiliyor.

(function (x,y,z){console.log(x+y+z);})(3,4,5);

/******************************************************** */

const isim = "Mugime"
if(isim){
    console.log(`${isim} hos geldin`);
}

if(personel.job){
    console.log(`Personelin isi ${personel.job}`);
}
else{
    console.log("Issiz");
}


/* -------------------------------------------------------------------------- */
/*                              OPTIONAL CHAINING    ?.                       */
/* -------------------------------------------------------------------------- */

const ad = "Necati"
console.log(ad?.fullname?.());                  //Bu sekilde "error varsa ignore et" dedik
console.log("Bu satira gecmek zorundayim");


const eleman = null
console.log(eleman?.job);

/* -------------------------------------------------------------------------- */
/*                                  CALLBACK                                  */
/* -------------------------------------------------------------------------- */

const toplam = (x,y) => {
    return x+y;
}

const numbers = (x,y,toplam) => {                //toplam bir fonksiyon
    return toplam(x,y)
}

console.log(numbers(5,7,toplam));

//document.getElementsByTagName("h1").addEventListener('click', baslikBoyut)


/* -------------------------------------------------------------------------- */
/*                                   CLOSURE                                  */
/* -------------------------------------------------------------------------- */

const dis = (disVariable) =>{
    return function ic(icVariable){
        console.log(disVariable);
        console.log(icVariable);
    }
}

const fonksiyon = dis(50)      //bunu disa atiyor
fonksiyon(100)                 //Bunu ise ice atiyor

dis(50)(100)          //Ayni isi yapiyor


const enDis = function(x) {
    return function inner(y){
        return function innest(z){
            return(x+y+z);
        }
    }
}
console.log(enDis(40)(50)(60));   