const { species } = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const resident = species.find(({ name }) => name === animal).residents;
  return resident.every(({ age: ageAnimal }) => ageAnimal >= age);
};

module.exports = getAnimalsOlderThan;
