const { species, employees } = require('../data/zoo_data');

const checkEmployee = ({ name, id }) => employees
  .some(({ id: idEmployee, firstName, lastName }) =>
    name === firstName || name === lastName || id === idEmployee);

const getSpecies = (responsibleFor) => responsibleFor.map((idSpecie) =>
  species.find(({ id }) => id === idSpecie).name);

const getLocations = (responsibleFor) =>
  responsibleFor.map((idSpecie) => species.find(({ id }) => id === idSpecie).location);

const getReport = () => employees
  .map(({ id: idEmployee, firstName, lastName, responsibleFor }) => ({
    id: idEmployee,
    fullName: `${firstName} ${lastName}`,
    species: getSpecies(responsibleFor),
    locations: getLocations(responsibleFor),
  }));

const getEmployeesCoverage = (employee) => {
  const report = getReport();
  if (!employee) return report;
  if (!checkEmployee(employee)) throw new Error('Informações inválidas');
  return report.find(({ id, fullName }) =>
    id === employee.id || fullName.includes(employee.name));
};

module.exports = getEmployeesCoverage;
