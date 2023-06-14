
let note = +prompt("Lütfen sinav sonucunuzu giriniz: ");

if(note > 81){
    console.log("Harf notunuz: A");
}
else if(note > 71 && note < 81){
    console.log("Harf notunuz: B");
}
else if(note > 61 && note < 71){
    console.log("Harf notunuz: C");
}
else if(note > 51 && note < 61){
    console.log("Harf notunuz: D");
}
else{
    console.log("Harf notunuz F. Dersten kaldiniz.");
}