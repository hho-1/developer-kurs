console.log("Modülden selamlar");

export const CALISMA_SAATI = 40

export function topla(a,b){
    return a+b
}

let counter = 5

const increase = (miktar) => counter += miktar

const decrease = (miktar) => {
    counter -= miktar
    return counter                 //süslü varsa return de yazmalisin
}

const benimAdim = "Ashley"

export {increase, decrease, benimAdim}


export default function ugurla(){                              //export default sayfanin tamamini göndermek icin
    console.log("Elveda JavaScript, hos geldin React");
}
