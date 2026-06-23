// Task 1: Employee Information System

// Ask for employee details using prompt
let name = prompt("Enter Employee Name:");
let age = prompt("Enter Employee Age:");
let department = prompt("Enter Employee Department:");
let salary = prompt("Enter Employee Salary:");

let employee = {
  name: name,
  age: parseInt(age),
  department: department,
  salary: parseFloat(salary)
};

console.log("Employee Details");
console.log("Name: " + employee.name);
console.log("Age: " + employee.age);
console.log("Department: " + employee.department);
console.log("Salary: " + employee.salary);

if (employee.salary > 30000) {
  console.log("Eligible for Bonus");
} else {
  console.log("Not Eligible");
}

console.log("-----------------------------------------------------");
console.log("-----------------------------------------------------");
// Task 2: Supermarket Billing

let productName = prompt("Enter Product Name:");
let productPrice = prompt("Enter Product Price:");
let quantity = prompt("Enter Quantity:");


productPrice = parseFloat(productPrice);
quantity = parseInt(quantity);

let totalBill = productPrice * quantity;

let finalAmount;
if (totalBill > 5000) {
  finalAmount = totalBill - (totalBill * 0.10); // 10% discount
  console.log("Total Bill: " + totalBill);
  console.log("Discount Applied: 10%");
} else {
  finalAmount = totalBill;
  console.log("Total Bill: " + totalBill);
  console.log("No Discount Applied");
}

console.log("Final Amount to Pay: " + finalAmount);

console.log("-----------------------------------------------------");
console.log("-----------------------------------------------------");
// Task 3: Student Result Portal

let studentName = prompt("Enter Student Name:");
let marks = prompt("Enter Marks:");
marks = parseInt(marks);

console.log("Student Name: " + studentName);
console.log("Marks: " + marks);

if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 75) {
  console.log("Grade: B");
} else if (marks >= 50) {
  console.log("Grade: C");
} else {
  console.log("Grade: Fail");
}

console.log("-----------------------------------------------------");
console.log("-----------------------------------------------------");

// Task 4: Bank ATM Eligibility

let userName = prompt("Enter User Name:");
let accountBalance = prompt("Enter Account Balance:");
let withdrawalAmount = prompt("Enter Withdrawal Amount:");

accountBalance = parseFloat(accountBalance);
withdrawalAmount = parseFloat(withdrawalAmount);

console.log("User Name: " + userName);
console.log("Account Balance: " + accountBalance);
console.log("Withdrawal Amount: " + withdrawalAmount);

if (withdrawalAmount <= accountBalance) {
  console.log("Transaction Successful");
} else {
  console.log("Insufficient Balance");
}

console.log("-----------------------------------------------------");
console.log("-----------------------------------------------------");

// Task 5: Login Validation

let username = "admin";
let password = "12345";

let inputUsername = prompt("Enter Username:");
let inputPassword = prompt("Enter Password:");

if (inputUsername === username && inputPassword === password) {
  console.log("Login Successful");
} else {
  console.log("Invalid Username or Password");
}

console.log("-----------------------------------------------------");
console.log("-----------------------------------------------------");

// Task 6: Online Food Order

let foodItems = ["Pizza", "Burger", "Pasta", "Sandwich", "Salad", "Sushi", "Tacos", "Ice Cream"];

console.log("First Item: " + foodItems[0]);

console.log("Last Item: " + foodItems[foodItems.length - 1]);

console.log("Total Number of Items: " + foodItems.length);

console.log("All Food Items:");
for (let item of foodItems) {
  console.log(item);
}

console.log("-----------------------------------------------------");
console.log("-----------------------------------------------------");

// Task 7: Company Employee Directory

let employee2 = {
  name: "John Doe",
  age2: 30,
  department: "IT",
  salary: 45000,
  experience: "5 years"
};

console.log("Employee2 Directory:");
for (let key in employee2) {
  console.log(key + ": " + employee2[key]);
}

console.log("-----------------------------------------------------");
console.log("-----------------------------------------------------");

// Task 8: Traffic Signal System

let signal = prompt("Enter Signal Color (Red/Yellow/Green):");

signal = signal.toLowerCase();

switch (signal) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Ready");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Invalid Signal");
}

console.log("-----------------------------------------------------");
console.log("-----------------------------------------------------");

// Task 9: Age Category Checker

let age3 = prompt("Enter your age3:");

age3 = parseInt(age3);

if (age3 >= 0 && age3 <= 12) {
  console.log("Category: Child");
} else if (age3 >= 13 && age3 <= 19) {
  console.log("Category: Teenager");
} else if (age3 >= 20 && age3 <= 59) {
  console.log("Category: Adult");
} else if (age3 >= 60) {
  console.log("Category: Senior Citizen");
} else {
  console.log("Invalid Age3");
}

console.log("-----------------------------------------------------");

// Task 10: Employee Attendance


let employeeName = prompt("Enter Employee Name:");
let attendance = prompt("Enter Attendance (Present/Absent):");

console.log("Welcome " + employeeName);
console.log("Attendance: " + (attendance.toLowerCase() === "present" ? "Present" : "Absent"));











