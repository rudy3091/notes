const dns = require("dns");

const lookUp = (host) => {
  return new Promise((resolve) => dns.lookup(host, (err, addr, family) => {
    if (err) throw new Error(err);
    resolve(addr);
  }));
}

(async () => {
  const result = await lookUp("www.google.com"); // unwrap address synchronously
  console.log(result); // 142.250.196.132
})()
