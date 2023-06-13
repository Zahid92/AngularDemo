export class Employee {
    static ID: number = 0
    Name!: string
    Age!: number
    EmployeeID!: number
    Salary: number = 0
    img: string = "..\\assets\\employeeIcon.jpg"
    
    constructor(name: string, age: number, salary: number) {
        this.Name = name
        this.Age = age
        Employee.ID += 1
        this.EmployeeID = Employee.ID
        this.Salary = salary
    }

}