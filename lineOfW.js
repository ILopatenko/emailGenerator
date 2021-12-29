const generateLine = (n) => {
  let line = '';
  for (let i = 0; i < n; i++) {
    line += 'W';
  }
  return line;
};

console.log(generateLine(253));
