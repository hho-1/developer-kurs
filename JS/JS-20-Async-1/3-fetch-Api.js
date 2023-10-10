//* ===========================================================
//*                          3- FETCH API
//*=============================================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamiza ve cevaplari yonetebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.



//Sayfa yüklenince veriyi getir

//fetch("https://api.github.com/users").then((res) => console.log(res))                                      //burada ok:true ve status: 200-300 arasi cikarsa basarili demektir
//fetch("https://api.github.com/users").then((res) => res.json()).then((veri) => ekranaBastir(veri));          //Aldigimiz veriyi json formatina cevirdik 


const ekranaBastir = (data) => {
    data.forEach(user => {
        document.querySelector("section").innerHTML += `
        <h1 class = "mt-4">NAME: <span class = "text-danger">${user.login}</span></h1>
        <img src=${user.avatar_url} width="50%">
        <h3>${user.node_id}</h3>
        `
    });
}


//Butona basilinca veriyi getir

const veriGetir = () => {
    fetch("https://api.github.com/users").then((res) => {

        if(res.ok == false){
            throw new Error("url'de hata var.")                     //Üstteki url'yi bozup denersen konsolda erroru görebilirsin
        }
        return res.json()

    }).then((veri) => ekranaBastir(veri))
}

document.querySelector("button").onclick = () => {
    veriGetir()                                                    // Butona basilinca veriyi getir dedik
}