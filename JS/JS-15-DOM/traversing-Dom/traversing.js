//*===========================================
//*            TRAVERSING DOM
//*===========================================
//? Bir HTML elementi uzerinden baska elementleri secmeye
//? DOM traversing denilir. Ozellikle dinamik olarak degisen
//? (silme veya yeni ekleme gibi) HTML elemanlarinin secerken
//? gerekli olabilir.


/* 1- Yukariya dogru (parent) parentNode, ParentElement
2- Asagiya dogru (children) firstElemntChild, firstChild, lastElementChild, lastElementChild
3- Yatayda hareket icin previousSibling, nextSibling */


const h2 = document.querySelector("h2")
console.log(h2);
console.log(h2.parentElement);
console.log(h2.parentElement.parentElement);
console.log(h2.parentElement.parentElement.parentElement);
console.log(h2.parentElement.parentElement.parentElement.parentElement);

