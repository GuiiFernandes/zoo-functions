const { employees } = require('../data/zoo_data');

const getEmployeeByName = (name) => {
  const obj = { ...employees.find(({ firstName, lastName }) =>
    firstName === name || lastName === name) };
  return obj;
};

module.exports = getEmployeeByName;
