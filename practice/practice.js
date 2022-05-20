console.log("practice");
let Name=prompt("enter your name:");
let email=prompt("Enter your email:");
let age=prompt("Enter your age:");
let country=prompt("Enter your country:")
let monthlySalary= Number(prompt("Enter your monthly salary:"));




let yearlySalary = monthlySalary*12;

document.write(`
    <div class="container">
        <p><span>Name:</span>${Name}</p>
        <p><span>Email:</span>${email}</p>
        <p><span>Age:</span>${age}</p>
        <p><span>Country:</span>${country}</p>
        <p><span>Salary:</span>${yearlySalary}</p>
    </div>
`);

