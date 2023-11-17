let course = "Clarusway";
console.log(course.length);
console.log(course[5]);


for(let i = 1; i <= course.length; i++){
    console.log(course);
}


const last = (yazi) =>{
    return yazi[yazi.length - 1]
}
console.log(last("Hello World"));

const list = (word) =>{
    for(let i = 0; i <= word.length - 1; i++){
        console.log(word[i]);
    }
}
list("How are you?");

console.log(course.toUpperCase());      //büyük harfle yazdirma
console.log(course.toLowerCase());      //kücük harfle yazdirma

console.log(course.split(""));          //parantez ici texti neye göre ayiracagimizi veriyor. burada "" harf harf ayir manasina geliyor


/* let atasozu = "Tecrübe tarak gibidir; ama hayat bunu insana kel olduktan sonra verir."
let bolunmus = atasozu.split(" ");
console.log(bolunmus[6]); */

const varMi = (yazi) => {
    let isTrue = false;
    let bolunmus = yazi.split(" ");
    for (let i = 1; i <= bolunmus.length - 1; i++){
        if (bolunmus[i] === "ama") isTrue = true;
    }
    if(isTrue === true) console.log("ama kelimesi yazida var.");
    else console.log("Bulunamadi.");
}

varMi("Dönülmez aksamin ufkundayiz vakit cok gec, ama yine de bir seyler yapmak lazim");


let message = "What a wonderful day";
console.log(message.split(" ").reverse());      // Stringi ya da arrayi tersten siralar
console.log(message.split(" ").reverse().join(" "));    // Bu da bu yazinin tersini tekrardan birlestirip donduruyor


let word1 = "merhaba";
word1 === word1.split("").reverse().join("") ? console.log("Polindrom bir kelime") : console.log("Polindrom degil");


let word2 = "soros";
word2 === word2.split("").reverse().join("") ? console.log("Polindrom bir kelime") : console.log("Polindrom degil");;


/* let date = "23.05.2023"
console.log(date.split(".").join(" ")); */

let months="Jan / Feb / Mar / Apr / May / Jun / Jul / Aug / Sep / Oct / Nov / Dec";
console.log(months.split(" / ", 5));    // Böl ama ilk 5 tanesini göster

console.log(months.split("/").join("-"));      // Slasi bos ver tire ile ayir

const tersten = (yazi) => {
    console.log(yazi.split("").reverse().join(""));
}
tersten("how are you")

/* -------------------------------------------------------------------------- */
/*5-                                 Slice()                                  */
/* -------------------------------------------------------------------------- */

// slice(başlangıç index numarası , bitiş index numarası ) başlangıç ve bitiş arasındaki karakterleri alır

console.log(course.slice(3,6));
console.log(course.slice(3));     // ücüncü karakterden en sona kadar al demek

console.log(course.slice(-5, -1));    //Indexlemeyi tersten yaparsan

// substring() metodu da slice ile ayni. Tek farki bunda negatif index numarasi kullanamiyoruz.

console.log(course.substring(5,9));



//stringlerde degisiklik yapmak icin replace metodu kullanilir


let siir = "Dönülmez aksamin ufkundayiz vakit cok gec, ama yine de bir seyler yapmak lazim";
console.log(siir.replace("bir seyler yapmak", "yatmak"));

console.log(siir.replaceAll(" ", "-"));

let variable = "kullanıcı adı";
console.log(variable.replaceAll("ı", "i").replace(" ", "_"));   //Hem bosluk yerine alt tire hem de Türkce karakteri ingilizce yaptik


//!String icinde arama islemleri includes, indexOf, Search, match gibi yöntemlerle yapilir.

console.log(siir.includes("vakit"));     //true false cevap döner

let url = "https://www.clarusway.com"
url.includes("https") ? console.log("Site güvenli") : console.log("Güvenli degil");


//Girilen bir mail adresinin gecerli olup olmadigini kontrol eden kod blogu

let mail = (entry) => console.log(entry.includes("@"));
mail("hfjhxb@gmail.com")

console.log(siir.indexOf("yine"));    //Bu kelimenin basladigi indexi verir. Eger aradigini buulamazsa -1 verir.


console.log(siir.indexOf("y", 4));     //4. degeri y mi?  Bulamazsa -1 döner

//    search metodu da bir metin icinde baska bir metni arar, bulamazsa -1 döner

console.log(siir.search("yine"));




//regex  ------>   Regular expressions     

//     /i    büyük kücük farketmez
//     /g    global olarak ara

console.log(siir.search(/ü/i));     //ü harfini ara, büyük kücük ayirmaksizin

let kelime = "bu cümlede türkçe karakterler vardir."

console.log(kelime.search(/[ıöüğç]/i));
console.log(kelime.replaceAll(/[ıöüğç]/gi, " "));   //Türkce karakterleri bul ve yerlerini bos birak


//trim()   tiraslamak

let sentence = "    Clarusway Full Stack     "
console.log(sentence);
console.log(sentence.trim());        //Basta ve sondaki bosluklari at
console.log(sentence.trimStart());   // Bastaki boslugu at

console.log(course.startsWith("C"));
console.log(course.endsWith("l"));


sayac = 0;
const sayi = (d, l, h) => {
  for (let i = l; i <= h; i++) {
    if (i % 10 === d || Math.floor(i / 10) === d) {
      console.log(i);
      
    }
  }
};
sayi(2, 10, 23);
