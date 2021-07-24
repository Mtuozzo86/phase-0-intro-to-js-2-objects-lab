// Write your solution in this file!
// const employee = {
//     name: "Mike",
//     streetAddress: "3652 Regent Ln"
// }

// function updateEmployeeWithKeyAndValue(object, key, value){
//     return Object.assign({}, object, {[key]: value})
// }

// function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value){
//     object[key] = value
//     return object
// }

// function deleteFromEmployeeByKey(employee, key){
//     let newEmployee = {...employee}
//     delete newEmployee[key]
//     return newEmployee
    
// }

// function destructivelyDeleteFromEmployeeByKey(employee, key){
//     delete employee[key]
//     return employee

// }

// const permanentDelete = destructivelyDeleteFromEmployeeByKey(employee, 'name')
// permanentDelete

const employee = {
    name: 'Mike',
    streetAddress: '3652 Regent Ln'
}

// function updateEmployeeWithKeyAndValue(employee, key, value){
//     return Object.assign({},employee, { [key]: value })
// }

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObj = {...employee}
    newObj[key] = value
    return newObj

}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key){
    const newObj = {...employee}
    delete newObj[key]
    return newObj
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}