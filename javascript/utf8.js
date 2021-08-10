// encode "한글" using encodeURIComponent
const hangul = encodeURIComponent("한글");

const _han = "한".charCodeAt(0).toString(16); // d55c
const _bin = _han.split("")
  .map(x => parseInt(x, 16).toString(2).padStart(4, 0)) // ['1101', '0101', '0101', '1100']

const _1 = parseInt(`1110${_bin[0]}`, 2).toString(16); // ed
const _2 = parseInt(`10${_bin[1]}${_bin[2].slice(0, 2)}`, 2).toString(16); // 95
const _3 = parseInt(`10${_bin[2].slice(2)}${_bin[3]}`, 2).toString(16); // 9c

const _gul = "글".charCodeAt(0).toString(16); // ae00
const _bin2 = _gul.split("")
  .map(x => parseInt(x, 16).toString(2).padStart(4, 0)) // ['1010', '1110', '0000', '0000']

const _4 = parseInt(`1110${_bin2[0]}`, 2).toString(16); // ea
const _5 = parseInt(`10${_bin2[1]}${_bin2[2].slice(0, 2)}`, 2).toString(16); // b8
const _6 = parseInt(`10${_bin2[2].slice(2)}${_bin2[3]}`, 2).toString(16); // 80

// encode "한글" in my way
const _hangul = [_1, _2, _3, _4, _5, _6]
  .map(s => "%" + s.toUpperCase())
  .join("");

console.log(hangul === _hangul); // true
