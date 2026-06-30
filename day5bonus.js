// Employee Management System
// Mini Project: Console-based Application

class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }
}

class EmployeeManagementSystem {
    constructor() {
        this.employees = [];
    }

    // Add Employee
    addEmployee(id, name, department, salary) {
        const emp = new Employee(id, name, department, salary);
        this.employees.push(emp);
        console.log(`Employee ${name} added successfully!`);
    }

    // View Employees
    viewEmployees() {
        console.log("\nEmployee List:");
        this.employees.forEach(emp => {
            console.log(`${emp.id} - ${emp.name} - ${emp.department} - ₹${emp.salary}`);
        });
    }

    // Search Employee by ID
    searchById(id) {
        const emp = this.employees.find(e => e.id === id);
        if (emp) {
            console.log(`Found: ${emp.id} - ${emp.name} - ${emp.department} - ₹${emp.salary}`);
        } else {
            console.log("Employee not found!");
        }
    }

    // Calculate Salary + Bonus
    calculateSalaryWithBonus(id, bonusPercent) {
        const emp = this.employees.find(e => e.id === id);
        if (emp) {
            const bonus = (emp.salary * bonusPercent) / 100;
            console.log(`Salary + Bonus for ${emp.name}: ₹${emp.salary + bonus}`);
        } else {
            console.log("Employee not found!");
        }
    }

    // Remove Employee
    removeEmployee(id) {
        const index = this.employees.findIndex(e => e.id === id);
        if (index !== -1) {
            console.log(`Employee ${this.employees[index].name} removed!`);
            this.employees.splice(index, 1);
        } else {
            console.log("Employee not found!");
        }
    }

    // Sort Employees by Salary
    sortBySalary() {
        console.log("\nEmployees Sorted by Salary:");
        this.employees.sort((a, b) => a.salary - b.salary)
            .forEach(emp => console.log(`${emp.name} - ₹${emp.salary}`));
    }

    // Find Employee by Name
    findByName(name) {
        const emp = this.employees.find(e => e.name.toLowerCase() === name.toLowerCase());
        if (emp) {
            console.log(`Found: ${emp.id} - ${emp.name} - ${emp.department} - ₹${emp.salary}`);
        } else {
            console.log("Employee not found!");
        }
    }

    // Display Employee Details using Destructuring
    displayDetails(id) {
        const emp = this.employees.find(e => e.id === id);
        if (emp) {
            const { id: empId, name, department, salary } = emp;
            console.log(`Employee Details:
            ID: ${empId}
            Name: ${name}
            Department: ${department}
            Salary: ₹${salary}`);
        } else {
            console.log("Employee not found!");
        }
    }
}

// Demo Run
const system = new EmployeeManagementSystem();

system.addEmployee(101, "Naveen", "Development", 30000);
system.addEmployee(102, "John", "HR", 60000);
system.addEmployee(103, "Arun", "Finance", 45000);

system.viewEmployees();
system.searchById(102);
system.calculateSalaryWithBonus(101, 10);
system.removeEmployee(103);
system.sortBySalary();
system.findByName("Naveen");
system.displayDetails(101);
