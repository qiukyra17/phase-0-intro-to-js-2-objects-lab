// Write your solution in this file!
const employee = {
    //key:value
    name:"Naruto Uzamaki",
    streetAddress:"Konohagakure",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee,[key]:value,}
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key]=value;
    return employee;
}

function deleteFromEmployeeByKey(employee,key){
    const updatedEmp = delete {...employee[key]};
    return {updatedEmp};
}

function destructivelyDeleteFromEmployeeByKey(employee,key){   
   delete employee[key];
   return employee;
    
}