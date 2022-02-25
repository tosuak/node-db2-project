// STRETCH
const cars = [
  {
    vin: 'KMHD25LE1DU042025',
    make: 'toyota',
    model: 'prius',
    mileage: 215000,
    title: 'clean',
    transmission: 'manual'
  },
  {
    vin: 'JH4DA1840KS004941',
    make: 'toyota',
    model: 'corolla',
    mileage: 115000,
    title: 'salvage',
  },
  {
    vin: '2G2FV22G5X2221544',
    make: 'ford',
    model: 'focus',
    mileage: 15000,
  },
];

exports.seed = async function(knex) {
  await knex('cars').truncate();
  await knex('cars').insert(cars);
};