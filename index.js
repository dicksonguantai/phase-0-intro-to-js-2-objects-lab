// Write your solution in this file!
const employee = {name:"",streetAddress:""};

function updateEmployeeWithKeyAndValue(object,key,value){

    const newEmployee = {...object};//spread operator copying the passed in object
    newEmployee[key] = value;
return object, newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key] =value;// updates tyhe object with the passed in key and value 

    return employee;//retruns the updated object

}

function deleteFromEmployeeByKey(employee,key){
    const newEmployee = {...employee};
    delete newEmployee[key];// deletes from the object based on the key passed in by calling the function 
    return employee,newEmployee;//retuns the new object after deletion 
}

function destructivelyDeleteFromEmployeeByKey(employee, key){

    delete employee[key];// deletes from the object employee with the passed in key 
    return employee;// returns the modified object 
}
