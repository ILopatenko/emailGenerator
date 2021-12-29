//This script converts setting from string to object (and returns it)
const setupConverter = (setupString) => {
  const localLength = +setupString.slice(0, setupString.indexOf('@'));
  const domainLength = +setupString.slice(
    setupString.indexOf('@') + 1,
    setupString.indexOf('.')
  );
  const hdLength = +setupString.slice(setupString.indexOf('.') + 1);
  const totalEmailLength = localLength + domainLength + hdLength + 2;
  return { localLength, domainLength, hdLength, totalEmailLength };
};
module.exports = setupConverter;
