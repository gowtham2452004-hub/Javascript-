//  Task 1 - Student Management System
let students = [
  { name:"Naveen", id:101, mark:85 },
  { name:"John", id:102, mark:45 },
  { name:"Arun", id:103, mark:25 }
];

console.log("All Students:", students);
console.log("Student Names:", students.map(s=>s.name));
console.log("Find ID 102:", students.find(s=>s.id===102));
console.log("Passed Students:", students.filter(s=>s.mark>=35));
console.log("Total Students:", students.length);

//  Task 2 - Employee Salary System
let employees = [
  { name:"Naveen", salary:30000 },
  { name:"John", salary:45000 },
  { name:"Arun", salary:60000 }
];

console.log("Highest Salary:", Math.max(...employees.map(e=>e.salary)));
console.log("Lowest Salary:", Math.min(...employees.map(e=>e.salary)));
employees.forEach(e=>e.salary+=5000);
console.log("With Bonus:", employees);
console.log("Total Salary:", employees.reduce((t,e)=>t+e.salary,0));
console.log("Above 40000:", employees.filter(e=>e.salary>40000));

//  Task 3 - Shopping Cart
let products = [
  { name:"Laptop", price:50000 },
  { name:"Mouse", price:500 },
  { name:"Keyboard", price:1500 }
];

console.log("Product Names:", products.map(p=>p.name));
let totalBill = products.reduce((t,p)=>t+p.price,0);
console.log("Total Bill:", totalBill);
console.log("Search Mouse:", products.find(p=>p.name==="Mouse"));
let discount = totalBill*0.1;
console.log("Final Bill:", totalBill-discount);

//  Task 4 - Bank Account
let account={ name:"Naveen", balance:50000 };
account.balance+=10000;
account.balance-=5000;
console.log("Current Balance:", account.balance);
console.log("Below 20000?", account.balance<20000);
console.log("Account Details:", account);

//  Task 5 - Company Login
let username = prompt("Enter Username");
let password = prompt("Enter Password");
if(username==="admin" && password==="1234"){
  console.log("Welcome");
}else{
  console.log("Invalid Username or Password");
}

//  Task 6 - Traffic Signal
let signal = prompt("Enter Signal Color");
switch(signal){
  case "Red": console.log("Stop"); break;
  case "Yellow": console.log("Ready"); break;
  case "Green": console.log("Go"); break;
  default: console.log("Invalid");
}

//  Task 7 - ATM Machine
let atmChoice = prompt("1 Balance 2 Deposit 3 Withdraw 4 Exit");
switch(atmChoice){
  case "1": console.log("Balance:", account.balance); break;
  case "2": account.balance+=1000; console.log("Deposited"); break;
  case "3": account.balance-=500; console.log("Withdrawn"); break;
  case "4": console.log("Exit"); break;
}

//  Task 8 - Cricket Score
let score=[10,25,40,60,80,100];
console.log("Highest:", Math.max(...score));
console.log("Lowest:", Math.min(...score));
let total=score.reduce((t,s)=>t+s,0);
console.log("Total:", total);
console.log("Average:", total/score.length);

//  Task 9 - Movie Ticket Booking
let age = prompt("Enter Age");
if(age>=18){
  confirm("Allow Movie");
}else{
  confirm("Not Allowed");
}

// Task 10 - Hospital Appointment
let token = prompt("Enter Token");
switch(token){
  case "1": console.log("Doctor A"); break;
  case "2": console.log("Doctor B"); break;
  case "3": console.log("Doctor C"); break;
  default: console.log("Invalid Token");
}

//  Task 11 - Array Method Practice
let fruits=["Apple","Orange","Banana"];
fruits.push("Mango"); console.log(fruits);
fruits.pop(); console.log(fruits);
fruits.shift(); console.log(fruits);
fruits.unshift("Grapes"); console.log(fruits);
fruits.splice(1,1,"Kiwi"); console.log(fruits);
console.log(fruits.slice(0,2));

//  Task 12 - Higher Order Methods
let emps=[
  {name:"A",salary:20000},
  {name:"B",salary:35000},
  {name:"C",salary:50000},
  {name:"D",salary:70000}
];
console.log("Map +5000:", emps.map(e=>({name:e.name,salary:e.salary+5000})));
console.log("Filter >30000:", emps.filter(e=>e.salary>30000));
console.log("Find 50000:", emps.find(e=>e.salary===50000));
console.log("Reduce Total:", emps.reduce((t,e)=>t+e.salary,0));
console.log("Some >60000:", emps.some(e=>e.salary>60000));
console.log("Every >15000:", emps.every(e=>e.salary>15000));

//  Task 13 - String Practice
let company=" Stackly IT ";
console.log(company.toUpperCase());
console.log(company.toLowerCase());
console.log(company.trim());
console.log(company.replace("IT","Software"));
console.log(company.includes("Stackly"));
console.log(company.split(" "));

//  Task 14 - Digital Clock
let timer=setInterval(()=>{
  console.log(new Date().toLocaleTimeString());
},1000);
setTimeout(()=>clearInterval(timer),10000);

//  Task 15 - Fake Store API
fetch("https://fakestoreapi.com/products")
.then(res=>res.json())
.then(data=>{
  console.log("Titles:", data.map(p=>p.title));
  console.log("Prices:", data.map(p=>p.price));
  console.log("Above 100:", data.filter(p=>p.price>100));
  console.log("Total Products:", data.length);
  console.log("Categories:", [...new Set(data.map(p=>p.category))]);
});
