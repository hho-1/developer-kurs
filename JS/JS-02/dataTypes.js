//*********** DATA TYPES */

//************************ */
//!Primitive data types
//************************ */

//!NUMBER Data Type

const age = 40;
const pi = 3.14;

console.log(pi);
//alert("Bu alani bos gecmeyin")

document.write("Pi degeri = ", pi);

//console.error("Bu bir hata mesajidir.")


//? Math Objesi matematiksel islemler barindiriyor.

let piValue = Math.PI;
console.log(piValue);
console.log(Math.round(piValue));

const dec = 7.67;
console.log(Math.round(dec));

console.log(Math.floor(dec));  //Asagi yuvarlar
console.log(Math.ceil(dec));   //Yukari yuvarlar

//.toFixed() ile kac digitin alinacagi belirtilir.

console.log(piValue.toFixed(4));

let x = 10/3;
console.log(x.toFixed(3));

console.log(Math.max(2,3,4,5,6,-89,100,-101));
console.log(Math.min(2,3,4,5,6,-89,100,-101));

console.log(Math.random().toFixed(3));
console.log(Math.random()*100);

let randomNumber = Math.random()*100;
console.log(randomNumber);
console.log(Math.round(randomNumber));


console.log(Math.round(Math.random()*10));

console.log(Math.pow(5,9));
console.log(Math.sqrt(144));

console.clear();
//!STRING Data Type

let text = "Javascript";

console.log(text[9]);   //9 index numarasi       

text[0] = "C";    //Bu ise yaramaz. Herhangi bir karaktere ulasabilirsin ama onu degistiremezsin.
console.log(text);

text = "Java";  //Bu sekilde degistirebiliriz.

let text1 = "javascript'in özelliklerini ögreniyorum."
console.log(text1);

//?Escape character (\)
let text2 = 'javascript\'in özelliklerini ögreniyorum.'    //Normalde burada tek tirnak problemi cikarir ama escape karakterden dolayi cikarmadi


// Bir satir asagi inmek icin \n kullanilir.
// 8 karakter icerden baslamak icin \t kullanilir.

let sentence = "\tGüzelligin on par'etmez\n\tBu bendeki ask olmasa"
console.log(sentence);

let yazi1 = "Düriye'nin gügümleri";
let yazi2 = " kalayli";
let yazi3 = "\nFistan giymis etekleri alayli";
console.log(yazi1 + yazi2 + yazi3);

let name = "Helen";
let surname = "Kuttery";
let job = " developer";

console.log("Personelimiz "+name + " " + surname + "," + job + " olarak calismaktadir.");

//?concat metodu

console.log("Concat metodu ile: " + name.concat(job));

let str1 = "Yallah sofer yallah";
let str2 = "\nNe duriyisen?";

let str3 = str1.concat(str2);
console.log(str3);

//!Template Literal - String Template - ES6
//Backtick isareti kullanilir.

let newText = `Personelimiz ${name} ${surname}, firmamizda ${job} olarak calismaktadir.`
console.log(newText);
console.log(`Bu yaziyi 
templplate literal 
olmadan
escape karakterler
ile ancak yazdirabilirdim.`);

//!Metin bicimlendirme

document.write("<br/><b/><i/>"+newText);

let isOpen=true;
let isSignUp=false;
let isSmall=4<10;
console.log(isSmall);


//Truthy values: Sayilar, karakterler, isaretler vs vs
//Falsy values: Bos olan tüm degerler: 0, -0, Null(bos), undefined, false, NaN

//!UNDEFINED
// herhangi bir degiskene deger atanmazsa otomatik olarak undefined olur.

let val;
console.log(val);
console.log(typeof val);

function example(){
    let sum = 65+32;
    return sum;  //Bu satir olmazsa asagidakinin sonucu undefined olur.
}
console.log(example());

//! NULL
//Bos bir degisken üretir.

let empty = null;

console.log(typeof empty);  //Bunun sonucu object olur. Ama ici bos bir object olur.
console.log(empty);         // Burasi null cikar.


//!  NON-PRIMITIVE DATA TYPES

/*ARRAYS */
//Birden fazla degisken tutabilen degiskenlere array deniyor.

let schoolNumbers=[282, 85, 355, 435, 505, 792];

console.log(schoolNumbers[4]);

/*OBJECTS */


let obj = {name:"Hellen",surname: "Kuttery", age:"39"};

console.log(obj);
console.log(obj.surname);

function example(){
    let sum = 65+32;
    return sum;  //Bu satir olmazsa asagidakinin sonucu undefined olur.
}
console.log(example());


//!TYPE CONVERSION

let val1 = 10;
let val2 = "30";
console.log(val1+val2);   //Bunu otomatikmen string olarak algiliyor. +
console.log(val2-val1);   //Bunu otomatikmen number olarak algiliyor. -
console.log(val2*val1);   //Bunu otomatikmen number olarak algiliyor. *
console.log(val2/val1);   //Bunu otomatikmen number olarak algiliyor. /

//STRING TO NUMBERS

console.log(val1+Number(val2));   //1. yol
let newVal2 = parseInt(val2);     //2. yol
console.log(newVal2);
console.log(val2+val1);


let decimalToString = "7.0978375837"

let toFloat = parseFloat(decimalToString);
console.log(toFloat+5);         
console.log(parseInt(decimalToString)); 

console.log(Number(false));


//NUMBER TO STRINGS

let stri1 = 35;
let stri2 = 7;

console.log(String(stri1));
let stri3 = String(stri1);

console.log(typeof stri3);

let stri4 = stri2.toString();
console.log(typeof stri4);

console.log(stri3+stri4);
