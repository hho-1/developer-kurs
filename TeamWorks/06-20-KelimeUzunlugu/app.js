

 
 
 
 // Temizle butonunun görünürlüğünü  gizle

 
 const textInput = document.getElementById("metinInput")
 const sonucElement = document.getElementById("sonuc")
 const sesliHarflerElementi = document.getElementById("sesliHarfler")
 const temizleButonu = document.getElementById("temizleButton")
 
 
 function hesapla(){
    let metin = textInput.value;
    
    // Metni küçük harflere dönüştürme ve karakter dizisini diziye ayırma
    
    let karakter = metin.toLowerCase().split("");
    console.log(karakter);

    // Sesli harfleri filtreleme ve yeni bir dizi oluşturma

    let sesliHarf = karakter.filter(function(karakter){
        return ["a", "e", "i", "o", "u"].includes(karakter)
    })

    // Sesli harf sayısını elde etme

    let sesliHarfSayisi = sesliHarf.length;
    console.log(sesliHarfSayisi);


    //sonucun görüntülenmesi
    sonucElement.textContent = `Sesli harf sayisi: ${sesliHarfSayisi}`;
    

    // Sesli harflerin görüntülenmesi

    sesliHarflerElementi.textContent = `Sesli harfler: ${sesliHarf.join(",")}`;


    // Temizle butonunun görünürlüğünü ayarla

    temizleButonu.style.display = "inline-block";
 }

 // Temizle butonunun görünürlüğünü  gizle

 function temizle(){
    textInput.value = "";
    sonucElement.textContent = "";
    sesliHarflerElementi.textContent = "";
    temizleButonu.style.display = "none";
 }