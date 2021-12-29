//IMPORT SETUP CONVERTER
const setupConverter = require('./setupConverter');

//IMPORT generator for LOCAL part
const generateLocalPart = require('./generateLocalPart');

//IMPORT generator for DOMAIN part
const generateDomainPart = require('./generateDomainPart');

//IMPORT generator for HD part
const generateHD = require('./generateHD');

//MAIN HELPER
const generateEmail = (setupString) => {
  let fullEmail;
  const setupObject = setupConverter(setupString);
  const local = generateLocalPart(setupObject.localLength);
  const domain = generateDomainPart(setupObject.domainLength);
  const hd = generateHD(setupObject.hdLength);
  fullEmail = `${local}@${domain}.${hd}`;
  return fullEmail;
};
module.exports = generateEmail;
