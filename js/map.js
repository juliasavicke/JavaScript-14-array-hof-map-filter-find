"use strict";
console.log("map.js");

//array.map((currentValue, index, arr) => {})
let suma = 0;
const nums = [1, 2, -3];
const mapped = nums.map((sk) => (suma += sk));

console.log("suma ===", suma);
console.log("mapped ===", mapped);
console.log("nums ===", nums);

const numsObjs = nums.map((sk) => ({ id: sk }));
console.log("numsObjs ===", numsObjs);

const numsLiArr = ["<li>1</li>", "<li>2</li>", "<li>3</li>"];

const numsLiArr2 = nums.map((sk) => `<li>${sk}</li>`);
console.log("numsLiArr2 ===", numsLiArr2);

const list1El = document.getElementById("list_1");

list1El.innerHTML = numsLiArr2.join("");

list1El.innerHTML = nums
  .filter((sk) => sk > 0)
  .map((sk) => `<li>${sk}</li>`)
  .join("");
