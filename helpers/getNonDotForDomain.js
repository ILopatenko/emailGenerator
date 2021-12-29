//IMPORT PRESETS
const sets = require('./allTheSets');

const getNonDotForDomain = () => {
  let symbol =
    sets.domainSet[Math.floor(Math.random() * sets.domainSet.length)];
  return symbol === '.' ? getNonDotForDomain() : symbol;
};

module.exports = getNonDotForDomain;
