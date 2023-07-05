const getirUlke = async (ulke) => {

    try{const res = await fetch(`https://restcountries.com/v3.1/name/${ulke}`)

    if(!res.ok){
        throw new Error("Veri getirilirken hata olustu.")
    }

    const data = await res.json()

    //console.log(data[0].name);

    ekranaBastir(data[0])}catch(error){
        console.log(error);
    }
}
//getirUlke("Turkey")
//getirUlke("Germany")
//getirUlke("Peru")

let dizi = ["Turkey", "Peru", "Japan", "Germany", "Belgium", "Canada"]

dizi.forEach((ulke) => {
    getirUlke(ulke)
})

const ekranaBastir = (country) => {
    document.querySelector(".countries").innerHTML += `

        <div class = "card w-50 shadow-lg">
            <img class = "card-img-top" src = ${country.flags.svg}>
        
            <div class = "card-body">
                <h5>${country.name.common}</h5>
                <ul class = "list-group list-group-flush">
                    <li class = "list-group-item"><i class="me-4 fas fa-lg fa-landmark"></i> ${country.capital}</li>
                    <li class = "list-group-item"><i class="me-4 fas fa-lg fa-comments"></i> ${Object.values(country.languages)}</li>
                    <li class = "list-group-item"><i class="me-4 fas fa-lg fa-money-bill-wave"></i>${Object.values(country.currencies)[0].name} (${Object.values(country.currencies)[0].symbol})</li>
                </ul>
            </div>

        </div>
    
    
    
    `
}



//!ekrana bastırılacak dizi elemanlarının key leri farklı farklıysa===>>
//!!!! Object.values()öğeleri, nesnede bulunan numaralandırılabilir  bir dizi döndürür, istenen nesne nin içindeki object in value larını yaz, bu value lar ,object.value sayesinde dizi içinde toplanır
//? Object.values(country.currencies)=currencies in value larını bir dizide toplar
//! TRY: nin value sini dizi yapar 0 indexli: [{name: 'Turkish lira', symbol: '₺'}]. TRY key i silinir
//? Object.values(country.languages)=languages in value larını bir dizide toplar[eng,span..] Eng key i silinir