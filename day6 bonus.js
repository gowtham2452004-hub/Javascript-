let employees = [
    { name: "Naveen", id: 101, salary: 30000 },
    { name: "John", id: 102, salary: 60000 },
    { name: "Arun", id: 103, salary: 45000 }
];


console.log("Total Employees :", employees.length);


let highest = employees.reduce((max, emp) => emp.salary > max.salary ? emp : max);
console.log("Highest Salary :", highest.salary);


let lowest = employees.reduce((min, emp) => emp.salary < min.salary ? emp : min);
console.log("Lowest Salary :", lowest.salary);


let totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
console.log("Total Salary of All Employees :", totalSalary);


console.log("Employee with Highest Salary :", highest.name);

console.log("Employee with Lowest Salary :", lowest.name);

console.log("Employees earning more than ₹40,000:");
employees.filter(emp => emp.salary > 40000).forEach(emp => console.log(emp.name));

let searchId = 103;
let found = employees.find(emp => emp.id === searchId);
if (found) {
    console.log("Employee Found");
    console.log("Name :", found.name);
    console.log("Salary :", found.salary);
} else {
    console.log("Employee Not Found");
}

console.log("Salaries after adding ₹5000 bonus:");
employees.forEach(emp => {
    console.log(emp.name + " :", emp.salary + 5000);
});

console.log("\n--- Employee Report")