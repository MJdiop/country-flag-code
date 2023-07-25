// src/CountryCode.ts
function countryCode(code) {
  return code.split("").map((l) => l.charCodeAt(0) % 32 + 127461).map((n) => String.fromCodePoint(n)).join("");
}
export {
  countryCode
};
