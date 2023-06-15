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



/* const electronics = products.filter((x) => x.category === "Electronics")
const clothes = products.filter((x) => x.category === "Clothes")
const prices = electronics.map((item) => item.price)
const avgPrice = (prices.reduce((sum, x) => sum + x, 0))/prices.length
console.log(avgPrice); */



/* const productsByCategory = products.reduce((acc, product) => {
    const category = product.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {});
  
  const avgPriceByCategory = Object.keys(productsByCategory).map(category => {
    const sum = productsByCategory[category].reduce((acc, product) => acc + product.price, 0);
    return { category: category, average: sum / productsByCategory[category].length };
  });
  

  const highPricedCategories = avgPriceByCategory.filter(category => category.average > 50);

  console.log(highPricedCategories); */







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




  const employeesByDepartment = employees.reduce((acc, employee) => {
    const department = employee.department;
    if (!acc[department]) {
      acc[department] = [];
    }
    acc[department].push(employee);
    return acc;
  }, {});
  
  // Use map to calculate the average salary for each department
  const avgSalaryByDepartment = Object.keys(employeesByDepartment).map(department => {
    const sum = employeesByDepartment[department].reduce((acc, employee) => acc + employee.salary, 0);
    return { department: department, average: sum / employeesByDepartment[department].length };
  });
  
  // Use filter to only select departments with an average above a certain threshold
  const highPaidDepartments = avgSalaryByDepartment.filter(department => department.average > 65000);

  console.log(highPaidDepartments);
