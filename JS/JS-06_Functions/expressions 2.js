/* -------------------------------------------------------------------------- */
//!                             EXPRESSION FUNCTION                           */
/* -------------------------------------------------------------------------- */

//! İsimsiz fonksiyondur
//! Bir değişkene atanan bir fonksyiondur. Bu nedenle bir dönüş değeri olmalıdır.
//! Parametre göndermek için değişken adını yazıp parantez içinde parametreler veriyoruz.

/* const toplam = function(num1, num2){   //Sadece fonksiyon ismini karsida tanimliyoruz, bir degiskene atiyoruz.
    return num1 + num2;
}

document.write(toplam(45,34)); */


/* let sayi = +prompt("Sayi giriniz: ");


let result = function(number){
    if (number % 2 === 0) return "cift";
    else return "tek";
}
console.log(result(sayi)); */


let maxSayi = function (x, y, z){
    
    let max = x;
    if(y >= max) max = y;
    if(z >= max) max = z;
    
    return max;
}

console.log(maxSayi(3,2,5));


