//  Task 1 - Find the Highest Salary
let employees = [
    { name: "Naveen", id: 101, salary: 30000 },
    { name: "John", id: 102, salary: 60000 },
    { name: "Arun", id: 103, salary: 45000 }
];

// Task 1
let highest = employees.reduce((max, emp) => emp.salary > max.salary ? emp : max);
console.log("Highest Salary :", highest.salary);
console.log("Employee Name :", highest.name);

//  Task 2 - Find Employee by ID
let searchId = 103;
let found = employees.find(emp => emp.id === searchId);
if (found) {
    console.log("Employee Found\n");
    console.log("Name :", found.name);
    console.log("Salary :", found.salary);
} else {
    console.log("Employee Not Found");
}

//  Task 3 - Calculate Salary with Bonus
let bonus = 5000;
employees.forEach(emp => {
    console.log(emp.name + " :", emp.salary + bonus);
});

//  Task 4 - Experience Check
let employeesExp = [
    { name: "Naveen", experience: 2 },
    { name: "John", experience: 7 },
    { name: "Arun", experience: 5 }
];
employeesExp.forEach(emp => {
    let status = emp.experience >= 5 ? "Senior Employee" : "Junior Employee";
    console.log(emp.name + " - " + status);
});

//  Task 5 - Display Only Employee Names
employees.forEach(emp => console.log(emp.name));

//  Task 6 - Display Employee IDs
employees.forEach(emp => console.log(emp.id));

//  Task 7 - Find Total Salary
let totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
console.log("Total Salary :", totalSalary);

//  Task 8 - Employees Earning More Than ₹40,000
employees.filter(emp => emp.salary > 40000).forEach(emp => console.log(emp.name));

//  Task 9 - Increase Salary
employees.forEach(emp => {
    console.log(emp.name + " :", emp.salary + 5000);
});

//  Task 10 - Employee Report
employees.forEach(emp => {
    console.log(`Employee Name : ${emp.name}
Employee ID : ${emp.id}
Salary : ${emp.salary}\n`);
});
