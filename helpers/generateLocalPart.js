//IMPORT PRESETS
const sets = require('./allTheSets');

const generateLocalPart = (length) => {
  let local = '';
  for (let i = 0; i < length; i++) {
    local += sets.localSet[Math.floor(Math.random() * sets.localSet.length)];
  }
  return local;
};
module.exports = generateLocalPart;
