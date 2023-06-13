export class Employee {
    static ID: number = 0
    Name!: string
    Age!: number
    EmployeeID!: number
    constructor(name: string, age: number) {
        this.Name = name
        this.Age = age
        Employee.ID += 1
        this.EmployeeID = Employee.ID
    }
}