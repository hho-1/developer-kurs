//! 15.soru
//Verilen dizideki her pozitif elemanın toplamını almak için bir kod yazın.
const input = [1, -4, 12, 0, -3, 30, 42, -150];
const pozitifSayilar = input.filter((item) => item > 0);
// console.log(pozitifSayilar);
const newArray = pozitifSayilar.reduce((acc, x) => (acc += x));
console.log(newArray);


//!16.soru
// Verilen adı kısaltmak ve adın baş harflerini döndürmek için bir kod yazın.

const input2 = "John Ronald Reuel Tolkien";

const yazdir = input2
  .split(" ")
  .map((word) => word[0])
  .join("");
console.log(yazdir);



/* 
1- High Priced Product Categories

You are given an array of objects representing a collection of products, each with a name, price, and category. Your task is to use map, filter, and reduce to calculate the average price of products in each category, and then return an array of objects containing only the categories that have an average price above 50. 


[
  { category: 'Clothes', average: 55 },
  { category: 'Electronics', average: 55 }
]
*/

const products = [
    { name: "Product 1", price: 20, category: "Electronics" },
    { name: "Product 2", price: 30, category: "Clothes" },
    { name: "Product 3", price: 40, category: "Electronics" },
    { name: "Product 4", price: 50, category: "Clothes" },
    { name: "Product 5", price: 60, category: "Clothes" },
    { name: "Product 6", price: 70, category: "Electronics" },
    { name: "Product 7", price: 80, category: "Clothes" },
    { name: "Product 8", price: 90, category: "Electronics" },
  ];



const productsByCategory = products.reduce((acc, product) => {
    const category = product.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {});
  
  const avgPriceByCategory = Object.keys(productsByCategory).map(category => {
    const sum = productsByCategory[category].reduce((acc, product) => acc + product.price, 0);
    return { 
      category: category, 
      average: sum / productsByCategory[category].length };
  });
  

  const highPricedCategories = avgPriceByCategory.filter(category => category.average > 50);

  console.log(highPricedCategories);







  /* 
  2- HR or IT
  
  Task : You are given an array of objects representing a collection of employees, each with a name, salary, and department. Your task is to use map, filter, and reduce to calculate the average salary for each department and then return an array of objects containing only the departments that have an average salary above 65000. 
  
  [
  { department: 'HR', average: 71666 }
    ]
  
  */

  const employees = [
    { name: "John", salary: 50000, department: "IT" },
    { name: "Jane", salary: 60000, department: "HR" },
    { name: "Bob", salary: 55000, department: "IT" },
    { name: "Sophie", salary: 75000, department: "HR" },
    { name: "Mike", salary: 65000, department: "IT" },
    { name: "Emily", salary: 80000, department: "HR" },
    { name: "David", salary: 70000, department: "IT" },
  ];




  /* const employeesByDepartment = employees.reduce((acc, employee) => {
    const department = employee.department;
    if (!acc[department]) {
      acc[department] = [];
    }
    acc[department].push(employee);
    return acc;
  }, {});
  
  console.log(employeesByDepartment);

  // Use map to calculate the average salary for each department
  const avgSalaryByDepartment = Object.keys(employeesByDepartment).map(department => {
    const sum = employeesByDepartment[department].reduce((acc, employee) => acc + employee.salary, 0);
    return { 
      department: department, 
      average: (sum / employeesByDepartment[department].length).toFixed(1) };
  });
  
  // Use filter to only select departments with an average above a certain threshold
  const highPaidDepartments = avgSalaryByDepartment.filter(department => department.average > 65000);

  console.log(highPaidDepartments); */






  // 3- Self created question for exercising the solutions above


  let students = [
    { name: "John", exam1: 50, exam2: 90, classLev: "11", hobby: "trekking" },
    { name: "Jane", exam1: 60, exam2: 80, classLev: "10", hobby: "football" },
    { name: "Bob", exam1: 55, exam2: 40, classLev: "9", hobby: "trekking"},
    { name: "Sophie", exam1: 75, exam2: 95, classLev: "10", hobby: "basketball" },
    { name: "Mike", exam1: 65, exam2: 75, classLev: "12", hobby: "football" },
    { name: "Emily", exam1: 80, exam2: 68, classLev: "11", hobby: "trekking" },
    { name: "David", exam1: 70, exam2: 82, classLev: "9", hobby: "tennis" },
    { name: "Leroy", exam1: 50, exam2: 90, classLev: "12", hobby: "trekking" },
    { name: "Bernard", exam1: 60, exam2: 80, classLev: "10", hobby: "football" },
    { name: "Kevin", exam1: 85, exam2: 40, classLev: "9", hobby: "basketball" },
    { name: "Bob", exam1: 78, exam2: 95, classLev: "10", hobby: "tennis" },
    { name: "Nicholas", exam1: 69, exam2: 75, classLev: "12", hobby: "tennis" },
    { name: "Sebastian", exam1: 93, exam2: 68, classLev: "11", hobby: "tennis" },
    { name: "Sybille", exam1: 100, exam2: 82, classLev: "12", hobby: "football" },
    { name: "Tom", exam1: 50, exam2: 90, classLev: "11", hobby: "football" },
    { name: "Harry", exam1: 60, exam2: 90, classLev: "10", hobby: "trekking" },
    { name: "Hans", exam1: 55, exam2: 40, classLev: "9", hobby: "trekking" },
    { name: "Toni", exam1: 75, exam2: 95, classLev: "10", hobby: "football" },
    { name: "Johnny", exam1: 45, exam2: 75, classLev: "12", hobby: "tennis" },
    { name: "Herkel", exam1: 80, exam2: 68, classLev: "11", hobby: "tennis" },
    { name: "Frank", exam1: 50, exam2: 82, classLev: "9", hobby: "trekking" },
    { name: "Christian", exam1: 50, exam2: 92, classLev: "12", hobby: "trekking" },
    { name: "Omar", exam1: 60, exam2: 90, classLev: "10", hobby: "football" },
    { name: "Kylian", exam1: 85, exam2: 40, classLev: "9", hobby: "trekking" },
    { name: "Francis", exam1: 78, exam2: 95, classLev: "10", hobby: "trekking" },
    { name: "Murat", exam1: 69, exam2: 75, classLev: "12", hobby: "basketball" },
    { name: "Jannick", exam1: 93, exam2: 68, classLev: "11", hobby: "football" },
    { name: "Kumar", exam1: 80, exam2: 82, classLev: "12", hobby: "basketball" },
  ];

  // a--- Add not average of all students to their objects (exam1 40%, exam2 60% effective)

  for(let i =0; i< students.length; i++){
    const totalGrade = (students[i].exam1 * 0.4 + students[i].exam2 * 0.6).toFixed(1)
    students[i].totalGrade = totalGrade;
    console.log(totalGrade);
  }

  console.log(students);
   
  // b--- Find the class who had the highest average grade
  
  const studentsByClasses = students.reduce((acc, student) => {
    const classLevel = student.classLev;

    if(!acc[classLevel]){
      acc[classLevel] = []
    }

    acc[classLevel].push(student)

    return acc;
  }, {})

  console.log(studentsByClasses);

  //Now we are using map to calculate average grade level of all classes

  const avgGradeByClass = Object.keys(studentsByClasses).map(classLev => {
    const total = parseFloat(studentsByClasses[classLev].reduce((acc, student) => acc + student.totalGrade, 0));
    return { 
      classLevel: classLev, 
      classAverage: (total / studentsByClasses[classLev].length).toFixed(2) };
  });

console.log(avgGradeByClass);

let max = 0;
for(let i = 0; i < avgGradeByClass.length; i++){
  if(Object.values(avgGradeByClass) > max) max = Object.values(avgGradeByClass);
}
console.log(max);




