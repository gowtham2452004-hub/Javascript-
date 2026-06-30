// 1st Task
function yearlySalary(monthlySalary) {
    return monthlySalary * 12;
}

let monthlySalary = 45000;
let yearly = yearlySalary(monthlySalary);

console.log("Yearly Salary : ₹" + yearly);
 
// 2. Student Pass or Fail
function checkResult(marks) {
    return marks >= 35 ? "Pass" : "Fail";
}
console.log("Result : " + checkResult(72));

// 3. Food Bill
function foodBill(price, quantity) {
    return price * quantity;
}
console.log("Total Bill : ₹" + foodBill(180, 3));

// 4. Welcome Employee
function welcomeEmployee(name, department) {
    console.log("Welcome " + name);
    console.log("Department : " + department);
}
welcomeEmployee("Naveen", "Development");

// 5. Shopping Discount
function finalAmount(price, discount) {
    return price - discount;
}
console.log("Final Amount : ₹" + finalAmount(5000, 500));

// 6. Company Login (Callback)
function login(callback) {
    console.log("Login Successful");
    callback();
}
function dashboard() {
    console.log("Loading Dashboard...");
}
login(dashboard);

// 7. Food Delivery (Higher Order Function)
function foodDelivery(steps) {
    steps.forEach(step => console.log(step));
}
foodDelivery(["Order Received", "Preparing Food", "Out for Delivery", "Delivered"]);

// 8. Lucky Draw (Generator Function)
function* luckyDraw() {
    yield "10%";
    yield "20%";
    yield "50%";
    yield "Better Luck Next Time";
}
let draw = luckyDraw();
console.log(draw.next().value);
console.log(draw.next().value);
console.log(draw.next().value);
console.log(draw.next().value);

// 9. Employee Bonus (Currying)
function bonus(salary) {
    return function(extra) {
        console.log("Total Salary : " + (salary + extra));
    }
}
bonus(50000)(5000);

// 10. Merge Employee Details (Spread Operator)
let employeePersonal = {name:"Naveen", age:25};
let employeeOffice = {id:101, dept:"Development"};
let employee = {...employeePersonal, ...employeeOffice};
console.log(employee);

// 11. Shopping Cart (Merge Arrays)
let cart1 = ["Mobile","Laptop"];
let cart2 = ["Headphone","Tablet"];
let cart = [...cart1, ...cart2];
console.log(cart);

// 12. Student Marks (Rest Operator)
function student(name, ...marks) {
    let total = marks.reduce((a,b) => a+b, 0);
    let avg = total / marks.length;
    console.log("Student : " + name);
    console.log("Total Marks : " + total);
    console.log("Average : " + avg);
}
student("Naveen",90,85,88,95);

// 13. Product Details (Object Destructuring)
let product = {name:"Laptop", price:65000, brand:"Dell", stock:20};
let {name, price} = product;
console.log("Name : " + name);
console.log("Price : ₹" + price);

// 14. Customer Details (Array Destructuring)
let customer = [101,"Naveen","Chennai",9876543210];
let [id, cname, city] = customer;
console.log("ID : " + id);
console.log("Name : " + cname);
console.log("City : " + city);

// 15. Add Product (push)
let cartAdd = ["Mobile","Laptop"];
cartAdd.push("Headphone");
console.log(cartAdd);

// 16. Remove Last Product (pop)
let cartRemove = ["Mobile","Laptop","Headphone"];
cartRemove.pop();
console.log(cartRemove);

// 17. Replace Employee using splice()
let employees = ["Rahul","Arun","John","David"];
employees.splice(employees.indexOf("John"), 1, "Naveen");
console.log(employees); 
// Output: ["Rahul","Arun","Naveen","David"]


// 18. Search Product using includes()
let products = ["Mouse","Keyboard","Monitor","Laptop"];
console.log(products.includes("Laptop") ? "Laptop is available" : "Laptop not found");
// Output: Laptop is available


// 19. Employee Ranking - Sort salaries
let salaries = [25000,45000,30000,70000];
salaries.sort((a,b) => a - b);
console.log(salaries); 
// Output: [25000,30000,45000,70000]

// 20 th Task
let messages = ["Hi", "Hello", "How are you?", "Good Morning"];

// Display latest message first
let reversedMessages = messages.reverse();

console.log(reversedMessages);

