const toBase64 = (content) => {
  const toBinary = (x) => x.toString(2);
  const buffer = Buffer.from(content);
  const binaryStr = Array.from(buffer)
    .reduce((acc, cur) => acc + toBinary(cur).padStart(8, 0), '');

  let result = '';
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  for (let i = 0; i < binaryStr.length; i += 24) {
    const _buf = binaryStr.substring(i, i + 24);

    for (let j = 0; j < 4; j++) {
      const byte = _buf.substring(j * 6, (j + 1) * 6);
      const padded = byte.length < 6 && byte.length > 0
        ? byte.padEnd(6, 0)
        : byte;
      result += chars[parseInt(padded, 2)] ?? '=';
    }
  }
  return result;
}

const str = 'hello world';
const my = toBase64(str);
const lib = Buffer.from(str).toString('base64');
console.log(my === lib); // true

const fromBase64 = (base64) => {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  return base64
    .split('')
    .map(char => chars.indexOf(char))
    .filter(x => x !== -1)
    .map(dec => dec.toString(2).padStart(6, 0))
    .join('')
    .match(/.{8}/g)
    .map((bin) => String.fromCharCode(parseInt(bin, 2)))
    .join('');
}

const myDecoded = fromBase64(my);
const libDecoded = atob(my);
console.log(myDecoded === libDecoded); // true
