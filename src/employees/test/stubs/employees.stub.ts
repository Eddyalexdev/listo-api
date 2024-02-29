import { EmployeeType } from "src/employees/types/employees.type";

export const employeeStub = (): EmployeeType => {
    return {
        id: "123",
        name: "Test",
        companyId: "",
        age: 23,
        company: {id: "123", name: "Company Test", address: "Av.Test", employees: []} 
    }
}