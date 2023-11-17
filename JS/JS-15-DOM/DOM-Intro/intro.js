/* -------------------------------------------------------------------------- */
/*                                     DOM                                    */
/* -------------------------------------------------------------------------- */
// Core DOM - standard model for all document types
// XML DOM - standard model for XML documents
// HTML DOM - standard model for HTML documents

document.title = "DOM INTRO";
const h1 = document.querySelector("h1");
// h1.style.backgroundColor="red"
h1.textContent = "Merhaba";
h1.className = "baslik";

/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/*                        ELEMENTLERE ERİŞİM METODLARI                        */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
//?                              getElementById(id)                           */
/* -------------------------------------------------------------------------- */

const kiraz = document.getElementById("kiraz");
console.log(kiraz);

//içindeki yazıyı değiştirebilirim, stil değiştirebilirim ve daha birçok şey...

//!NOT:contentde değişiklik yapmak için 3 yöntem vardır:
// textContent
// innerText
// innerHTML
/* -------------------------------------------------------------------------- */
// 1-textContent
kiraz.textContent = "Karpuz"; // textContent o alandaki sadece metinleri gösterir
console.log(kiraz.textContent);

const kayisi = document.getElementById("kayisi");
console.log(kayisi.textContent);
/* -------------------------------------------------------------------------- */
// innerText
console.log(kayisi.innerText);
// kendisi kodu parse ediyor ve ekrana getirmiyor
/* -------------------------------------------------------------------------- */
// innerHTML
// tamamen html kodu olarak
kayisi.innerHTML = `<a href="https://www.google.com">Meyve Listesi</a>`;

/* -------------------------------------------------------------------------- */
/*                        document.getElementsByTagName                       */
/* -------------------------------------------------------------------------- */
// getElementsByTagName  => bir HTML collection dönüyor. Arraye benzer bir yapısır ama arraye metodlarını (map,filter,reduce) kullanamam

const li = document.getElementsByTagName("li");
console.log(li);

console.log(li[1]);
console.log(li[3]);
console.clear();
// HTML collection spread yapabiliyorum
console.log(...li);
// Bu şekilde spread operatörüyle arraye çevirebiliyorum

const arr = [...li];

arr.forEach((x) => console.log(x));
arr.map((x) => console.log(x));

// Tek eleman bile olsa bir HTML collection döner.
const ul = document.getElementsByTagName("ul");
console.log(ul[0]);

/* -------------------------------------------------------------------------- */
/*                       document.getElementsByClassName                      */
/* -------------------------------------------------------------------------- */

// Bu özellikte HTML collection döner
console.clear();
const main = document.getElementsByClassName("main");

console.log(main);
console.log(main[1]);
console.clear();
console.log(...main);

[...main].forEach((x) => console.log(x));

/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*     document.querySelector( tag ise tagname,class . ile,id ise  #'la')     */
/* -------------------------------------------------------------------------- */

// CSS ile seçim yapma işlemlerinin hepsi burada kullanılır. tag ile, id ile ,class ile 

// tag ile seçim yapma
const kucukBaslik = document.querySelector("h2");
kucukBaslik.textContent = "Meyvelerin Dilinden";
kucukBaslik.id = "kucukbaslik";
console.log(kucukBaslik);

/* -------------------------------------------------------------------------- */
// id ile seçim yapma

const btn=document.querySelector("#btn")
console.log(btn);
btn.style.backgroundColor="green"

// NOT: Açıklanacak bir nokta var

/* -------------------------------------------------------------------------- */

const input=document.querySelector('.input')
input.className="yeniStil"

// background-color -> kebab case  -- Css kebab case
// backgroundColor  => camel case  -- Js Camel Case kullanıyor

// QuerySelectorAll


const parNew = document.querySelector(".main p#par")
console.log(parNew);
parNew.className = "baslik"


const listItem = document.querySelectorAll("li")
console.log(listItem);
console.log(Object.entries(listItem));
console.log(Object.keys(listItem));
console.log(Object.values(listItem));