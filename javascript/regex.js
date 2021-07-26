const assert = require("assert");

// korean phone number format
const reg = /010-[0-9]{4}-[0-9]{4}/

// should fully match
const test1 = "010-1234-1234";
const test2 = "010-0000-0000";
const test3 = "010-6478-2382";

// should not match at all
const test4 = "010-aaaa-bbbb";
const test5 = "010-234-1234";
const test6 = "010-12345-1234";

assert(reg.test(test1));
assert(reg.test(test2));
assert(reg.test(test3));

assert(!reg.test(test4));
assert(!reg.test(test5));
assert(!reg.test(test6));


// email format
const reg2 = /[A-Za-z0-9]+\@[A-Za-z0-9]+\.(com|co.kr|net)/

const test11 = "grayblack313@gmail.com";
const test12 = "grayblack313@gmail.co.kr";

const test13 = "grayblack313.gmail.com";
const test14 = "grayblack313@gmailcom";

assert(reg2.test(test11));
assert(reg2.test(test12));

assert(!reg2.test(test13));
assert(!reg2.test(test14));
