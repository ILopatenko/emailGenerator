//IMPORT PRESETS
const sets = require('./allTheSets');

//IMPORT generator for NON DOT symbol
const getNonDotForDomain = require('./getNonDotForDomain');

const generateDomainPart = (length) => {
  let domain = getNonDotForDomain();
  let symbol;
  for (let i = 1; i < length - 1; i++) {
    domain[i - 1] === '.'
      ? (symbol = getNonDotForDomain())
      : (symbol =
          sets.domainSet[Math.floor(Math.random() * sets.domainSet.length)]);
    domain += symbol;
  }
  domain += getNonDotForDomain();
  return domain;
};
module.exports = generateDomainPart;
