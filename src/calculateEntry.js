const { prices } = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const counter = { child: 0, adult: 0, senior: 0 };
  entrants.forEach(({ age }) => {
    let range;
    if (age >= 50) {
      range = 'senior';
    } else if (age >= 18) {
      range = 'adult';
    } else {
      range = 'child';
    }
    counter[range] += 1;
  });
  return counter;
};

const calculateEntry = (entrants) => {
  if (!entrants || entrants === []) return 0;
  const entries = countEntrants(entrants);
  const total = Object.keys(entries).reduce((sum, key) => sum + (entries[key] * prices[key]), 0);
  return Number(total.toFixed(2));
};

module.exports = { calculateEntry, countEntrants };
