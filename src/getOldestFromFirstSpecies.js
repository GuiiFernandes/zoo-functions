const { species, employees } = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const idAnimal = employees.find(({ id: idEmployee }) => idEmployee === id).responsibleFor[0];
  return species.find(({ id: idSpecie }) => idSpecie === idAnimal).residents
    .reduce((oldest, { name, sex, age }) =>
      (age > oldest[2] ? [name, sex, age] : oldest), ['', '', 0]);
};

module.exports = getOldestFromFirstSpecies;
