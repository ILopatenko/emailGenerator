const all = `abcdefghijklmopqrstuvwxyzABCDEFGHIJKLMOPQRSTUVWXYZ~!@#$%^&*()-_=+[{]}|;:'",<.>/?/`;

const generateLine = (n) => {
  let line = '';
  let current;
  for (let i = 0; i < n; i++) {
    current = all[Math.ceil(Math.random() * all.length)];
    line += current;
  }
  return line;
};

console.log(generateLine(200));
