// console.log('Hello')

// Interfaces

/* type Person2 = {
    name:string
}

const p2:Person2 = {
    name: 'Mark M'
} */

/* interface Person {
    name:string,
    readonly id:number
}
const person1:Person = {
    name: 'Mark',
    id : 1
}

console.log(person1.id)

person1.id = 2

person1.name = 'Hello' */

/* interface Calendar {
    events: string[],
    addEvents(event: string): void;

}

class LMSCalendar implements Calendar{

    constructor(public events: string[]){}

    addEvents(event: string): void {
        this.events.push(event);
    }

}


const de06 = new LMSCalendar(['HTML', 'JS'])

// console.log(de06)

const de07 = new LMSCalendar([])

de07.addEvents('HTML')
de07.addEvents('CSS')
de07.addEvents('TS')

/* console.log(de07) */

/* interface Color {
    color: {r: number, g: number, b: number};
}

interface Shape {
    area: number;
}

class Square implements Color, Shape {
    constructor( public color: {r: number, g: number, b:number}, public area: number){
    }
}

const sq = new Square({r:255,g:0,b:0} , 255)
console.log(sq);
const sq2 = new Square({r:0,g:255,b:0} , 169) */

//function signature of interface 

/* interface Sum{
    (num1: number, num2: number): number;
}

function add(n1: number, n2: number): number{
    return n1+ n2;
}

function conC(n1: string, n2: string): string{
    return n1+n2;
}

let arithemticAdd:Sum = add;

console.log(arithemticAdd(2,5)); */

//Generic

/* function getArray<T>(items:T[]): T[]{
    return new Array().concat(items)
}

let numArr = getArray([1,2,3,4])
let strArr = getArray(['john', 'Mike', 'Alan'])
strArr.push(3)  // Error
strArr.push('Jane')  // 
numArr.push(5)
numArr.push('Sally') // */


/* class keyValuePair<T, U> {
    constructor(public key:T, public value:U ){
    }
}

const obj1 = new keyValuePair<string,number>('age', 45);

const obj2 = new keyValuePair(1, 'one')
const obj3 = new keyValuePair('1', 'one')
console.log(obj1);
console.log(obj2);
console.log(obj3)

obj3.key = 2
obj3.value = '1' */



// constructor

/* class Employee {
    empCode: number;
    empName: string;

    constructor (code:number, name:string){
        this.empCode = code;
        this.empName = name
    }
}

let employee1 = new Employee(10, 'Mark')
let employee2 = new Employee(20, 'Hasan')

console.log(employee1)
console.log(employee2) */

//Inheritance

/* class Insan{
    name:string;
    constructor(name:string){
        this.name = name
    }
    yazdir(){
        console.log(this.name)
    }

    selamla(){
        console.log(`Merhaba ${this.name}`)
    }
}
const person1= new Insan('Mark')


class Isci extends Insan {
    sgkNo: number;
    
    constructor(sgkNo:number, name:string){
        super(name);
        this.sgkNo = sgkNo;
    }
    
    yazdir(){
        console.log(this.name, this.sgkNo)
    }
    
}

const isci1 = new Isci(100, 'Ahmet')

// console.log(isci1.name)
// console.log(isci1.sgkNo)
// isci1.yazdir()
// isci1.yazdir()
// person1.yazdir()

isci1.selamla() */


//Abstact class
/* abstract class Vehicle {

    year: number;
    color: string;
    constructor(year: number, color: string) {
      this.year = year;
      this.color = color;
    }
  
    startEngine(): void {
      console.log(`Engine Started`)
    }
  
    abstract stopEngine(): void;
  }

  class Arac extends Vehicle{
    model: string;
    constructor(year:number, color:string,model:string){
        super(year,color);
        this.model = model;
    }
    stopEngine():void{
        console.log('Motor Durduruldu')
    }
  }

  const arac1 = new Arac(2000,'green','A4')

  arac1.startEngine()
  arac1.stopEngine() */

  /* class Person {
    public name: string;
    private age: number;

    constructor(name:string, age: number){
        this.name =name;
        this.age = age
    }

    getAge(){
        console.log(this.age) 
    }

    setAge(age:number){
        if(age < 100 && age > 18){

            this.age = age
        }
    }
  }

  const Osman = new Person('Osman', 45)

 Osman.name = 'Osm'
 console.log(Osman)

//  Osman.age = 40
 Osman.setAge(105)

 Osman.getAge()
 */

/*  class Employee {
    public empName: string;
    protected empCode: number;
    private id = Math.random();
    constructor(empCode: number, name: string) {
      this.empCode = empCode;
      this.empName = name
    }
    displayId():void{
        console.log(this.id)
    }
  }
  
  class DevelopmentEmployee extends Employee {
    private department: string;
  
    constructor(code: number, name: string, dep: string) {
      super(code, name);
      this.department = dep;
    //   this.id = 100
    }

    display():void{
        console.log(this.empCode)
    }

   }
  
  let emp = new DevelopmentEmployee(100, "John", "Backend")
//   console.log(emp.department) // Compiler Error
//   console.log(emp.empCode) // Compiler Error

  emp.display()
  emp.displayId() */

  class Circle {
    static pi: number = 3.14;
  
    static calcArea(radius:number) {
      return this.pi * radius * radius
    }
  }
  
  let y = Circle.pi; // returns 3.14
  let x = Circle.calcArea(5); // return 78.5

  console.log(y)
  console.log(x)