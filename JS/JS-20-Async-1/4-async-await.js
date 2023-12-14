//*===============================================================
//*                   4- ASYNC-AWAIT
//*===============================================================
//? Async-Await ECMAScript 2017 ile Javascript diline eklenmistir.
//? Aslinda Promise yapisinin syntax olarak basitlestirilmis halidir.
//?! Bu baglamda syntatic sugar benzetmesi yapilabilir.

//* Bir fonksiyonu async  hale getirmek icin fonksiyon keyword'nun onune async keyword'u eklenir.

//* Bir async fonksiyon icerisinde await keyword'u ile yapilan istegin cevabinin beklenmesi saglanir.

//* Aslinda dizilis olarak senkron mantiga benzeyen kod yazarak Asenkron kod yazmayı mumkun kilar.

//* Await, promise-temelli herhangi bir fonksiyonun onune getirilerek getirildigi satirdaki kodun durdurulmasini saglar. Yapilan istek yerine getirilip sonuc degerlerinin dondurulmesi ile kodun calismasi devam eder.
//! JavaScript try anahtar kelimesi kod bloğundaki kodları çalışma zamanında test etmek için kullanılır.

//! JavaScript catch anahtar kelimesi çalışma zaman hatası sonucu oluşan hataları ekrana yazdırmak için kullanılır.

//! JavaScript throw anahtar kelimesi özel hata oluşturmayı sağlar.


const getUsers = async () => {



    try {
        const res = await fetch("https://api.tvmaze.com/search/shows?q=girls")

        if(!res.ok){
        
            girlsDiv.innerHTML = `
            <h1 class = "text-danger">An error occured.</h1>
            <img src = "./img/404.png" alt = "hata">
            `

            throw new Error(`Biraz hata var. ${res.status}`)
        }

        const veri = await res.json()

        ekranaBastir(veri)

    }catch(error){
        console.log("Try catch blogunu kullandik ki error kodun calismasini durdurmasin");
        }



}
console.log("hala devam");

document.querySelector("button").onclick = () => {
    getUsers()
}

const ekranaBastir = (veri) => {
    
    veri.forEach(element => {
        girlsDiv.innerHTML += `

            <h2>${element.show.name}</h2>                           
            <img src=${element.show.image.medium}>
            <h3>${element.show.genres}</h3>
        
        `
    });
}

const girlsDiv = document.querySelector("section")

