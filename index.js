// Write your solution in this file!
const employee = {}
employee.name = 'Mike'
employee.streetAddress = '742 Evergreen Terrace'

function updateEmployeeWithKeyAndValue(employee, key, val) {
    const newObj = { ...employee }
    newObj[key] = val
    return newObj
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = Object.assign({}, employee)
    delete newEmployee[key]
    return newEmployee

}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}