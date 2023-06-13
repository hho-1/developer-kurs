
//What is the new avengers array after this code block?

/* let avengers = ["Iron Man", "Captain America", "Black Widow", "Hulk"];
avengers.splice(2, 1, "Thor", "Hawkeye");
console.log(avengers); */

/* The splice() method adds and/or removes array elements.

The splice() method overwrites the original array. 

array.splice(index, howmany, item1, ....., itemX)
*/

/* const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.splice(2, 2, "Lemon", "Kiwi");
console.log(fruits); */

/* **************************************************************************************** */

//2. Write a loop to iterate languages?


/* let fullStack = {
    languages: ["JavaScript", "React", "HTML"],
    jira: true,
    gitHub: true,
    difficulty: 8,
};

fullStack.languages.forEach((item) => console.log(item)) */





  /* **************************************************************************************** */

  //3. Write a code for get fullStack object's keys

  /* let fullStack2 = { 
    languages: ["JavaScript", "React", "HTML"], 
    jira: true, 
    gitHub: true, 
    difficulty: 8, 
  }; 

  Object.keys(fullStack2).forEach((item) => console.log(item)) */
   
  


/* **************************************************************************************** */

//4. Write a method to get myCar's age

  /* const myCar = { 
    make: "ford", 
    model: "Mustang", 
    year: 1965, 
    color: "Black", 
  };  
  
  let yas = (simdi) => {
    console.log(simdi - myCar.year);
  }
  yas(2023);


  let yas2 = function (current) {
    console.log(current - myCar.year);
  }

  yas2(2023) */


  /* **************************************************************************************** */

//5. What is the output of this code snippet?

  /* (function (data) {
    return (function () {
      console.log(data);
      data = "Full Stack";
    })();
  })("Clarusway"); */



  /* **************************************************************************************** */

  //6. Which Object method returns an iterable that can be used to iterate over the properties of an object?

  //A. Object.get() B. Object.keys() C. Object.each() D. Object.loop()



  /* **************************************************************************************** */

  //7. What will this code print?

  /* var v = 1;
  var f1 = function () {
    console.log(v);
  };
  var f2 = function () {
    var v = 2;
    f1();
  }; f2(); */


  /* function basla() {
    var ad = 'foo';
    setTimeout(function(){
      console.log(ad);
    },1000);
  }
  

  basla(); */



  /* **************************************************************************************** */

  //15. What will be the output

 /*  var x = 10;
function counter() {
  let x = 1;
  return function () {
    return x++;
  };
}
scoreTracker = counter();
scoreTracker();
scoreTracker();
scoreTracker();
const latest = scoreTracker();
console.log(latest); */






  /* **************************************************************************************** */

  //16. What will be printed in the console on execution of the following JS code:

  /* var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  var myArr = array.filter((v) => v % 3 === 0);
  console.log(myArr); */





  /* **************************************************************************************** */

  //17. What is the output? Why?


  //console.log([1, 2, 3] == [1, 2, 3]);




  /* **************************************************************************************** */

  //18. What is the output?

  /* const arr1 = [1, 3, 5];
  const arr2 = arr1;
  console.log(arr1 === arr2); */





  /* **************************************************************************************** */

  //19. What is the output?

/* const arr3 = [1, 3, 5];
const arr4 = arr3;
arr3[0] = 100;
console.log(arr4); */


/* **************************************************************************************** */

//20. What is the output?

/* let arr5 = [1, 3, 5];
let arr6 = arr5;
arr5 = [2, 4, 6];
console.log(arr6); */