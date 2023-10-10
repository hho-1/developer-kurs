// const button = document.getElementById("submit");
// const a = document.getElementById("input1");
// const b = document.getElementById("input2");
// const result = document.getElementById("result")
// //toplama fonksiyonu
// // function add(a,b){
// //     return a+b
// // } 
// button.addEventListener('click', function(){
//     result.innerText = `${a.value + b.value}`
// })
// const arrow = (x,y)=> x+y
//Type Annotations and Basic Data Types
/* let message : string = 'Hello World';

message = 5;


let msg = 'Merhaba'
console.log(msg)

msg = 3
console.log(msg)

msg = 'Merhaba Dünya'

let count: number = 100

count = 'Hello'


let isTrue: boolean = true;

isTrue = false
isTrue = 5
isTrue = 'false' */
//arrays
/* let num: number[] = [12,1,3]

num.push(4)
num.push('4') //hata verir

let message2 = ['Hello','Günaydın', 'Guten Morgen']

message2.push(2)

//Empty Array

let score = []

let scr: number[]=[] //Doğru yöntem

let readOnlyArray: readonly number[] = [1,2,3,4,5];

readOnlyArray.push(6); //error
readOnlyArray.shift(); //error

console.log(readOnlyArray)

readOnlyArray = [1,2,3,4,5,6]; */
//Tuples
/* let myTuple: [number,string,boolean];

myTuple = [6103,'Abdullah',false]
// myTuple = ['Abdullah',6103,false] // error
myTuple.push(false)


let myTpl: [string,number]

myTpl = ['Hello',1]

myTpl.push(false)
myTpl.push(5) */
//array of Tuples
/* let DE06: [number,string][];

DE06 = [[6103,'Abdullah'],[6101,'Şeyma'],[6104,'Suray'],[6105,'Habip']]

DE06.push([6102,'Gulsen'])
DE06.push([6000,7000])

DE06.pop()

DE06[0].pop()

console.log(DE06) */
//Enum
// const enum Colors {
//     Red,
//     Green,
//     Blue =100,
//     Yellow=200
// }
// console.log(Colors.Green)
// console.log(Colors.Blue)
// console.log(Colors.Yellow)
// enum Tshirts {
//     XS = 'Xsmall',
//     S = 'Small',
//     M = 'Medium',
//     L ='Large'
// }
// console.log(Tshirts.XS)
// const enum Tee {
//     XS = 'Xsmall',
//     S = 'Small',
//     M = 38,
//     L = M + 2,
//     XL= 42,
//     XXL
// }
// console.log(Tee.L)
/* enum PrintMedia {
    Newspaper = 1,
    Newsletter = getPrintMediaCode('newsletter'),
    Magazine = Newsletter * 3,
    Book = 10
}

function getPrintMediaCode(mediaName: string): number {
    if (mediaName === 'newsletter') {
        return 5;
    }
}

PrintMedia.Newsletter; // returns 5
PrintMedia.Magazine; // returns 15 */
//Any
// let x: any = 0;
// let z:number = x
// x = 'Hello';
// x = false;
// let y:any[] = [1,'Hello',false]
//Unknown
// let notSure: unknown = 4;
// let msg3:unknown = 'Hello World'
// console.log(msg3.length)
// let msg4:string = msg3 as string
// console.log(msg4.length)
// let t:number = notSure
// notSure = 'Hello'
// notSure = false
//void
// function myFunc():void{
//     console.log('Hello World')
// }
// myFunc()
//never
// function error(message: string): never{
//     throw new Error(message);
// }
// let output = error('New Error')
// console.log(output)  //return nothing - printing nothing 
// union type
function selamla(greet, name) {
    if (!name)
        name = 'user';
    return `${greet} ${name}`;
}
console.log(selamla('Merhaba', 'Mark'));
console.log(selamla('Hello'));
