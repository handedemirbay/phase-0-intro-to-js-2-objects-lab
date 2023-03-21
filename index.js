// Write your solution in this file!
const employee = {
  name: 'Hande Demirbay',
  streetAddress: '16 Istanbul'
}

function updateEmployeeWithKeyAndValue(obj, key, value){
  return {...obj, [key]: value,
  };
}
const updateEmployee = updateEmployeeWithKeyAndValue(employee, 'streetAddress', '34 Istanbul');


function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
  obj[key] = value;
  return obj;
}
const destUpEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '34 Istanbul');


function deleteFromEmployeeByKey(obj, key, value){
  return {...obj, [key]: value,
  };
}
const deleteEmployee = deleteFromEmployeeByKey(employee, 'name', undefined);


function destructivelyDeleteFromEmployeeByKey(obj, key, value){
  obj[key] = value;
  return obj;
}
const destDelEmployee = destructivelyDeleteFromEmployeeByKey(employee, 'name', 'undefined');
