//  Task 1: Employee Management System
let employees = [
    {
        name: "Naveen",
        id: 101,
        salary: 30000
    },
    {
        name: "John",
        id: 102,
        salary: 60000
    }
];

for (let emp of employees) {
    console.log("Employee Details:");
    console.log("Name: " + emp.name);
    console.log("ID: " + emp.id);
    console.log("Salary: " + emp.salary);

    // Salary eligibility check
    if (emp.salary > 30000) {
        console.log("Employee Eligible For Bonus");
    } else {
        console.log("Employee Not Eligible For Bonus");
    }

    console.log("----------------------");
}

// Task 2: Student Result Portal

let marks = [85, 90, 78, 88, 92];

let total = 0;
for (let m of marks) {
    total += m;
}

let percentage = total / marks.length;

console.log("Marks: " + marks);
console.log("Total Marks: " + total);
console.log("Percentage: " + percentage + "%");

if (percentage >= 90) {
    console.log("Grade: A+");
} else if (percentage >= 80) {
    console.log("Grade: A");
} else if (percentage >= 70) {
    console.log("Grade: B");
} else if (percentage >= 60) {
    console.log("Grade: C");
} else {
    console.log("Grade: Fail");
}

 console.log("----------------------");

// Task 3: E-Commerce Cart

let products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 2000 }
];

function calculateBill(items) {
    let total = 0;

    for (let item of items) {
        total += item.price;
    }

    console.log("Total Bill: ₹" + total);

    if (total > 5000) {
        let discounted = total - (total * 0.10);
        console.log("Discount Applied: 10%");
        console.log("Final Amount: ₹" + discounted);
    } else {
        console.log("No Discount Applied");
        console.log("Final Amount: ₹" + total);
    }
}

calculateBill(products);

 console.log("----------------------");

// Task 4: Login Authentication

let username = "admin";
let password = "12345";

let inputUser = "admin";
let inputPass = "12345";

let result = (inputUser === username && inputPass === password) 
             ? "Login Success" 
             : "Invalid Credentials";

console.log(result);


 console.log("----------------------");

// Task 5: Traffic Signal System

let signal = "Yellow"; 

switch(signal) {
    case "Red":
        console.log("Stop");
        break;
    case "Yellow":
        console.log("Ready");
        break;
    case "Green":
        console.log("Go");
        break;
    default:
        console.log("Invalid Signal");
}


 console.log("----------------------");

 // Task 6: ATM Withdrawal System

let balance = parseFloat(prompt("Enter Account Balance:"));
let withdrawal = parseFloat(prompt("Enter Withdrawal Amount:"));

if (withdrawal <= balance) {
    console.log("Transaction Successful");
} else {
    console.log("Insufficient Balance");
}

 console.log("----------------------");

 // Task 7: Online Food Order

function orderFood(callback) {
    console.log("Order Received");
    callback();
}

function prepareFood(callback) {
    console.log("Food Preparing");
    callback();
}

function deliverFood() {
    console.log("Food Delivered");
}

orderFood(() => {
    prepareFood(() => {
        deliverFood();
    });
});

 console.log("----------------------");

 // Task 8: Cashback Generator

function* cashbackGenerator() {
    yield "10% Cashback";
    yield "20% Cashback";
    yield "50% Cashback";
    yield "Better Luck Next Time";
}

let offers = cashbackGenerator();

for (let offer of offers) {
    console.log(offer);
}

 console.log("----------------------");

 // Task 9: Hospital Patient Check

let age = parseInt(prompt("Enter Age:"));
let weight = parseInt(prompt("Enter Weight:"));

if (age > 18) {
    if (weight > 50) {
        console.log("Eligible For Treatment");
    } else {
        console.log("Not Eligible");
    }
} else {
    console.log("Not Eligible");
}

 console.log("----------------------");

 // Task 10: Mini Employee Portal

let employees = [];

function addEmployee(name, id, salary) {
    employees.push({ name, id, salary });
    console.log("Employee Added Successfully!");
}

function viewEmployees() {
    console.log("Employee List:");
    for (let emp of employees) {
        console.log(emp);
    }
}

function calculateBonus(id) {
    let emp = employees.find(e => e.id === id);
    if (emp) {
        if (emp.salary > 30000) {
            console.log(emp.name + " is Eligible for Bonus");
        } else {
            console.log(emp.name + " is Not Eligible for Bonus");
        }
    } else {
        console.log("Employee Not Found");
    }
}

function searchEmployee(id) {
    let emp = employees.find(e => e.id === id);
    console.log(emp ? emp : "Employee Not Found");
}

function deleteEmployee(id) {
    let index = employees.findIndex(e => e.id === id);
    if (index !== -1) {
        employees.splice(index, 1);
        console.log("Employee Deleted Successfully!");
    } else {
        console.log("Employee Not Found");
    }
}

function totalEmployees() {
    console.log("Total Employees: " + employees.length);
}

addEmployee("Naveen", 101, 30000);
addEmployee("John", 102, 60000);
viewEmployees();
calculateBonus(102);
searchEmployee(101);
deleteEmployee(101);
totalEmployees();




