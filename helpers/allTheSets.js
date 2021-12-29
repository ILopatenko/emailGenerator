const digits = '0123456789';
const latinLower = 'abcdefghijklmopqrstuvwxyz';
const latinUpper = 'ABCDEFGHIJKLMOPQRSTUVWXYZ';
const specWiki = "!#$%&'*+-/=?^_`{|}~";
const specDocs = "#-_~!$&'*+=";
const domainSpec = '-.';

const localSet = digits + latinLower + latinUpper + specDocs;
const domainSet = digits + latinLower + latinUpper + domainSpec;
const hdSet = latinLower + latinUpper;

module.exports = { localSet, domainSet, hdSet };
