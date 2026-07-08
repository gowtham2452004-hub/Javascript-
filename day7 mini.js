//Final Mini Project - Employee Payroll System

let employees = [
  { id:101, name:"Naveen", salary:30000 },
  { id:102, name:"John", salary:45000 },
  { id:103, name:"Arun", salary:60000 }
];

// Utility Functions
function viewEmployees(){
  console.log("All Employees:", employees);
}

function searchEmployeeByID(id){
  let emp = employees.find(e=>e.id===id);
  console.log(emp ? emp : "Employee Not Found");
}

function addBonus(amount){
  employees.forEach(e=>e.salary+=amount);
  console.log("Bonus Added:", employees);
}

function highestSalary(){
  let max = Math.max(...employees.map(e=>e.salary));
  console.log("Highest Salary:", max);
}

function lowestSalary(){
  let min = Math.min(...employees.map(e=>e.salary));
  console.log("Lowest Salary:", min);
}

function totalSalary(){
  let total = employees.reduce((t,e)=>t+e.salary,0);
  console.log("Total Salary:", total);
}

function filterAbove40000(){
  console.log("Above 40000:", employees.filter(e=>e.salary>40000));
}

function employeeReport(){
  employees.forEach(e=>{
    console.log(`ID:${e.id}, Name:${e.name}, Salary:${e.salary}`);
  });
}

function currentDateTime(){
  console.log("Current Date & Time:", new Date().toLocaleString());
}

function fetchEmployeesFromAPI(){
  return fetch("https://fakestoreapi.com/users")
    .then(res=>res.json())
    .then(data=>{
      console.log("Fetched Employees:", data.map(u=>({id:u.id,name:u.username,salary:Math.floor(Math.random()*50000)+20000})));
    });
}

// Menu System
function payrollMenu(choice){
  switch(choice){
    case 1: viewEmployees(); break;
    case 2: searchEmployeeByID(102); break;
    case 3: addBonus(5000); break;
    case 4: highestSalary(); break;
    case 5: lowestSalary(); break;
    case 6: totalSalary(); break;
    case 7: filterAbove40000(); break;
    case 8: employeeReport(); break;
    case 9: currentDateTime(); break;
    case 10: fetchEmployeesFromAPI(); break;
    case 11: console.log("Exit"); break;
    default: console.log("Invalid Choice");
  }
}


payrollMenu(1);  
payrollMenu(2);  
payrollMenu(3);  
payrollMenu(4);  
payrollMenu(5);  
payrollMenu(6);  
payrollMenu(7);  
payrollMenu(8);  
payrollMenu(9);  
payrollMenu(10); 
payrollMenu(11);
