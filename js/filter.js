"use strict";
console.log("filter.js");

//array.filter((currentValue, index, arr) => {})

const nums = [1, -5, 2, 10, -4, 3, "lape", "snape", undefined];

const filtered = nums.filter(
  (sk) => !(typeof sk === "number" || typeof sk === "string")
);

console.log("filtered ===", filtered);
console.log("nums ===", nums);
