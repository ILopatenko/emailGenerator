//IMPORT PRESETS
const sets = require('./allTheSets');

const generateHD = (length) => {
  let hd = '';
  for (let i = 0; i < length; i++) {
    hd += sets.hdSet[Math.floor(Math.random() * sets.hdSet.length)];
  }
  return hd;
};
module.exports = generateHD;
