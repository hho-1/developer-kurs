let weather = "sisli";

// switch(weather){
//     case "yagmurlu": 
//         console.log("Semsiye al yoksa islanirsin"); 
//         break;

//     case "karli": 
//         console.log("otur evinde, disarda ne isin var"); 
//         break;

//     case "bulutlu": 
//         console.log("bu havada iyi gezilir"); 
//         break;

//     case "günesli":
//         console.log("Aman günes carpmasin");
//         break;

//     case "sisli":
//         console.log("Araba sürerken önünü göremezsin. En iyisi yürüme git");
//         break;
    
//     default:
//         console.log("Gecerli bir hava durumu girmen lazim");
//         break;
        
// }



// let date = new Date().getDay();

// switch(date){
//     case 0: 
//         console.log("Bugün pazar"); 
//         break;
//     case 1: 
//         console.log("Bugün pazartesi"); 
//         break;
//     case 2: 
//         console.log("Bugün sali"); 
//         break;
//     case 3: 
//         console.log("Bugün carsamba"); 
//         break;
//     case 4: 
//         console.log("Bugün persembe"); 
//         break;
//     case 5: 
//         console.log("Bugün cuma"); 
//         break;
//     case 6: 
//         console.log("Bugün cumartesi"); 
//         break;
    
//     default:
//         console.log("Bilgisayarin tarih kismi bozuk ya da internetin kapali");
//         break;
        
// }


let kidem = prompt("Kidem dereceniz nedir: ")
let prim;

switch(kidem){
    case "prof":
        prim = 1000;
        break;
    case "senior":
        prim = 700;
        break;
    case "junior":
        prim = 300;
        break;
    default:
        prim = 100;
        break;
}

document.write("Alacaginiz kidem primi ", prim,"$'dir.")


// Case kisminda birden fazla satirlik islemler yapilacaksa {} icerisine almak gerekiyor.