const { species } = require('../data/zoo_data');

const mapResidents = (residentsLoc, { sex, sorted }) => {
  let residents = residentsLoc;
  if (sex) residents = residents.filter(({ sex: sexAnimal }) => sex === sexAnimal);
  residents = residents.map(({ name: nameResident }) => nameResident);
  if (sorted) residents.sort((a, b) => a.localeCompare(b));
  return residents;
};

const value = (name, residents, opt) =>
  ((!opt || !opt.includeNames) ? name : ({ [name]: mapResidents(residents, opt) }));

const getAnimals = (loc, opt) => {
  const speciesLoc = species.filter(({ location }) => location === loc);
  return speciesLoc.map(({ name, residents }) => value(name, residents, opt));
};

const report = (obj, loc, options) => ({ ...obj, [loc]: getAnimals(loc, options) });

const onlyLocationNames = ({ location }) => location;

const uniqueLocations = (loc, idx, array) => array.indexOf(loc) === idx;

const getAnimalMap = (options) => species.map(onlyLocationNames)
  .filter(uniqueLocations)
  .reduce((obj, location) => report(obj, location, options), {});

module.exports = getAnimalMap;
