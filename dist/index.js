"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.ts
var country_flag_code_exports = {};
__export(country_flag_code_exports, {
  countryCode: () => countryCode
});
module.exports = __toCommonJS(country_flag_code_exports);

// src/CountryCode.ts
function countryCode(code) {
  return code.split("").map((l) => l.charCodeAt(0) % 32 + 127461).map((n) => String.fromCodePoint(n)).join("");
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  countryCode
});
