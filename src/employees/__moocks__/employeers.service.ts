import { employeeStub } from "../test/stubs/employees.stub";

export const employeesService = jest.fn().mockReturnValue({
    findOne: jest.fn().mockReturnValue(employeeStub()),
    findAll: jest.fn().mockReturnValue([employeeStub()]),
    create: jest.fn().mockReturnValue(employeeStub()),
    update: jest.fn().mockReturnValue(employeeStub())
})