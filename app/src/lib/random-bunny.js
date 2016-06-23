import bunnies from '../data/bunnies.json';

export default () => {
  return bunnies[Math.floor(Math.random() * bunnies.length)];
};
