const { species, hours } = require('../data/zoo_data');

const weekDays = Object.keys(hours);

const findExhibition = (weekDay) => species
  .filter(({ availability }) => availability.includes(weekDay))
  .map(({ name }) => name);

const zooSchedule = () => weekDays.reduce((obj, weekDay) =>
  ((hours[weekDay].open && hours[weekDay].close) === 0
    ? { ...obj, [weekDay]: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } }
    : { ...obj,
      [weekDay]: {
        officeHour: `Open from ${hours[weekDay].open}am until ${hours[weekDay].close}pm`,
        exhibition: findExhibition(weekDay),
      } }), {});

const getSchedule = (scheduleTarget) => {
  const animal = species.find(({ name }) => name === scheduleTarget);
  if (animal) return animal.availability;
  const schedule = zooSchedule();
  if (weekDays.includes(scheduleTarget)) return { [scheduleTarget]: schedule[scheduleTarget] };
  return schedule;
};

module.exports = getSchedule;
