let x = +prompt("x: ")
let y = +prompt("y: ")

console.log(x>0 && y>0);    //   AND operatörü
console.log(x>0 || y>0);    //   OR operatörü

if((x>0 && y>0) || (x<0 && y<0)){
    console.log("Girdiginiz sayilarin carpimi pozitif cikar.");
}
else{
    if(x==0 || y==0){
        console.log("Girdiginiz sayilarin carpimi sifir cikar.");
    }
    else{
        console.log("Girdiginiz sayilarin carpimi negatif cikar.");
    }
}


let a = true;
console.log(!a);

