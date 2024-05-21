// Part 3: Array with Types and Indexing - Employee Salaries
// Challenge:
// You are managing employee salaries for a company. Implement logic to calculate salaries and
// handle bonuses.
// 1. Define a type alias named Employee with the following properties:
// • name (string): The name of the employee.
// • hoursWorked (number): The number of hours the employee worked.
// • hourlyRate (number): The hourly rate of the employee.
// • salary (number): The base salary of the employee.
// 2. Define an array named employees containing employee objects. Each employee
// object should include a name, hoursWorked, hourlyRate, and salary.
// 3. Implement a function named calculateSalary that calculates the salary for each
// employee based on the hours worked and hourly rate.
// 4. If an employee has worked 20 hours or more, apply a 10% bonus to their salary.

type Employee = {
  name: string;
  hoursWorked: number; // the hourly rate is the amount of money earned for one hour of work
  hourlyRate: number;
  salary?: number;
};

let employees: Employee[] = [
  {
    name: "Azan",
    hoursWorked: 45,
    hourlyRate: 8000,
    salary: undefined,
  },
  {
    name: "Ayesha",
    hoursWorked: 22,
    hourlyRate: 5,
    salary: undefined,
  },
  {
    name: "Azan",
    hoursWorked: 18,
    hourlyRate: 10000,
    salary: undefined,
  },
];

function calculateSalary(HourlyWorked: number, hourlyRate: number) {
  
    let salary =  hourlyRate * HourlyWorked
    return salary;
}

for(let i = 0; i < employees.length; i++) {

    let totalsalary = calculateSalary(employees[i].hourlyRate,employees[i].hoursWorked)

    console.log(
        `The employee ${employees[i].name} work for ${
          employees[i].hoursWorked
        } a month with a hourly rate of ${
          employees[i].hourlyRate
        } his total montly salary is ${totalsalary}`
    )
}



    // employees.forEach(employe => {

    //     let totalsalary = calculateSalary(employe.hourlyRate,employe.hoursWorked)
    
    //     console.log(
    //         `The employee ${employe.name} work for ${
    //           employe.hoursWorked
    //         } a month with a hourly rate of ${
    //           employe.hourlyRate
    //         } his total montly salary is ${totalsalary}`
    //     )
    // }
    
    // )












