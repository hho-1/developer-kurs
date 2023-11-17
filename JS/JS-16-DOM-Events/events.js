/* -------------------------------------------------------------------------- */
/*                                CREATEELEMENT                               */
/* -------------------------------------------------------------------------- */


const newH3 = document.createElement("h3");
const text = document.createTextNode("ALISVERIS LISTESI")
newH3.appendChild(text)                           //text'i   newh3'e ekledik

const resimAlani = document.querySelector('#resimAlani')

resimAlani.before(newH3)                                   //Resim alaninin öncesine ekle dedik

newH3.style.textAlign = 'center'         //Ortaladik


/****************************************************************************** */

//Daha kisa bir yol

const baslik = document.querySelector('.baslik')
baslik.innerHTML = `<h3 style="text-align: center">ALISVERIS LISTESI</h3>`



//document.querySelector('#resimAlani').appendChild(newH3)     en kisa yol bu satir



/* -------------------------------------------------------------------------- */
/*                                   EVENTS                                   */
/* -------------------------------------------------------------------------- */


// 1. yöntem  ----------   HTML icinde onmouseover="style.width='30%'"   vb seklinde yapilabiliyor

// 2. Yöntem

/* const resimKucult = () => {
    resimAlani.style.width = '30%'
}

const resimDuzelt = () => {
    resimAlani.style.width = '50%'
} */


//3. yöntem  ----------> DOM üzerinden elemana ulasip event olusturma

/* document.querySelector('.baslik').onmouseover=()=>{
    this.style.color = 'teal'
} */


//!  Javascript bu eventleri bir API'den cekerek kullanir


//    4. Yöntem ------->   addEventlistener

const resim = document.getElementById('resim')

/* document.querySelector('#kemerBtn').addEventListener('click', function (){
    resim.src="./images/kemer.jpg"
}
)

const cuzdanGoster = () =>{
    resim.src="./images/cuzdan.jpg"
}

document.querySelector('#cuzdanBtn').addEventListener('click', cuzdanGoster) */


const inputBolum = document.getElementById("input")
console.log(inputBolum);

 const ekle = document.getElementById("ekleBtn")
  /*  ekle.addEventListener('click', function () {
    console.log(inputBolum.value);                     // Bu sekilde arama kisminda bir sey yazildiginda bunu görebiliyoruz.

    const urun = document.querySelector(".urun")
    urun.innerHTML = `<p> ${inputBolum.value}</p>`
    inputBolum.value = ""                              //KULLANDIKTAN SONRA ILGILI YERI BOSALTSIN DIYE
}) */


inputBolum.onkeydown = () => {
    inputBolum.style.backgroundColor = "skyblue"           //klavyeden bir tusa basildiginda arka plan mavi olsun
}

inputBolum.onkeyup = () => {
    inputBolum.style.backgroundColor = "#ddd"              //tus birakildiginda arka plan gri olsun
} 


document.getElementById('buyukBtn').addEventListener('click', function (){inputBolum.value = inputBolum.value.toUpperCase()})
document.getElementById('kucukBtn').addEventListener('click', function (){inputBolum.value = inputBolum.value.toLowerCase()})
document.getElementById('toggleBtn').addEventListener('click', function (){
    inputBolum.value === inputBolum.value.toLowerCase() ? inputBolum.value = inputBolum.value.toUpperCase() : inputBolum.value = inputBolum.value.toLowerCase()
})


//Inputa girilen elemani listeye ekleme

/* ekle.addEventListener("click", function () {
    if (inputBolum.value != "") {
      const li = document.createElement("li");
  
      const liText = document.createTextNode(inputBolum.value);
      li.appendChild(liText);
  
      li.className = "list-group-item";
      const liste = document.getElementById("liste");
      liste.appendChild(li);
      inputBolum.value = "";
    }
    else {
      alert("Bir ürün girişi yapın")
    }
  }); */


//Bunun kisayolu asagidaki gibi

  ekle.addEventListener('click', function(){
    document.getElementById("liste").innerHTML += `<li class='list-group-item'> ${inputBolum.value}</li>`;
  })


  /*************************************************************** */


document.querySelector('#del').addEventListener('click', function(){
    //document.getElementById("liste").removeChild(document.getElementById("liste").lastElementChild)    //lastChild da ayni isi yapiyor galiba
    //document.getElementById("liste").removeChild(document.getElementById("liste").firstElementChild)
    document.getElementById("liste").removeChild(document.getElementById("liste").childNodes[2])         // 2 index degil, sira numarasi 
})


//keyCode -----------> klavye karakterlerinin asci kodu

inputBolum.onkeydown = (tus) => {
    if(tus.keyCode === 76){                // Entera bastiysa ekle
        ekle.click()
    }
    if(tus.keyCode === 88){                // deleteye bastiysa sil
        inputBolum.value = "" 
    }

}





