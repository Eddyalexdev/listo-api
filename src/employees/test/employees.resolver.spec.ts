import { Test } from "@nestjs/testing"
import { EmployeesResolver } from "../employees.resolver"
import { EmployeesService } from "../employees.service"
import { employeeStub } from "./stubs/employees.stub"
import { EmployeeType } from "../types/employees.type"

jest.mock('../employees.service')

describe('EmployeesResolver', () => {
    let employeesResolver: EmployeesResolver 
    let employeesService: EmployeesService

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [],
            providers: [EmployeesResolver, EmployeesService]
        }).compile()
        
        employeesResolver = moduleRef.get<EmployeesResolver>(EmployeesResolver)
        employeesService = moduleRef.get<EmployeesService>(EmployeesService)
        jest.clearAllMocks()
    })

    describe('findOne', () => {
        describe('when findOne is called', () => {
            let employee: EmployeeType

            beforeEach(async () => {
                employee = await employeesResolver.findOne(employeeStub().id)
            })

            test('then it should call employeeService', () => {
                expect(employeesService.findOne).toHaveBeenCalledWith(employeeStub().id)
            })
        })
    })
})