"use strict";
console.log("map.js");

//array.map((currentValue, index, arr) => {})
let suma = 0;
const nums = [1, 2, 3];
const mapped = nums.map((sk) => (suma += sk));

console.log("suma ===", suma);
console.log("mapped ===", mapped);
console.log("nums ===", nums);

const numsObjs = nums.map((sk) => ({ id: sk }));
console.log("numsObjs ===", numsObjs);

const numsLiArr = ["<li>1</li>", "<li>2</li>", "<li>3</li>"];

const numsLiArr2 = nums.map((sk) => `<li>${sk}</li>`);
console.log("numsLiArr2 ===", numsLiArr2);
