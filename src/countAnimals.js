const { species: dSpecies } = require('../data/zoo_data');

const countAnimalsSex = (species, sex) =>
  dSpecies.find(({ name }) => name === species).residents
    .reduce((count, { sex: sexRes }) => (sexRes === sex ? count + 1 : count), 0);

const countSpecies = (species) => dSpecies.find(({ name }) => name === species).residents.length;

const count = () => dSpecies.reduce((obj, { name, residents }) =>
  ({ ...obj, [name]: residents.length }), {});

const countAnimals = ({ species, sex } = { species: '', sex: '' }) => {
  if (!!species && !!sex) return countAnimalsSex(species, sex);
  if (!!species && !sex) return countSpecies(species);
  return count();
};

module.exports = countAnimals;
