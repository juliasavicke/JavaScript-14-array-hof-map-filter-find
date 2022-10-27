"use strict";
console.log("find.js");

const nums = [1, -5, 2, 10, -4, 3, "lape", "snape", undefined];

const sk2 = nums.find((sk) => sk === 2);

console.log("sk2 ===", sk2 > -5);

if (sk2 !== undefined) {
  console.log("radom sk2 ===", sk2);
}

const arrayOfObjects = [
  {
    title: "html",
    author: "James B.",
    year: 2022,
  },
  {
    title: "css",
    author: "Mike B.",
    year: 2012,
  },
  {
    title: "js",
    author: "John B.",
    year: 2020,
  },
  {
    title: "css",
    author: "JaMosh B.",
    year: 2002,
  },
];

console.log("arrayOfObjects ===", arrayOfObjects);

let foundPost = null;
arrayOfObjects.forEach((obj) => {
  if (obj.title === "css") {
    console.log(obj);
    foundPost = obj;
  }
});

console.log("foundPost ===", foundPost);

foundPost = arrayOfObjects.find((postObj) => {
  if (postObj.title === "css") {
    return true;
  }
});
foundPost.found = true;
console.log("arrayOfObjects ===", arrayOfObjects);

let foundPost1 = null;
foundPost1 = arrayOfObjects.find((postObj) => {
  if (postObj.author.startsWith("Ja") === true) {
    return true;
  } else return false;
});
console.log("foundPost1 ===", foundPost1);

let filterPost1 = null;
filterPost1 = arrayOfObjects.filter((postObj) => {
  if (postObj.author.startsWith("Ja") === true) {
    return true;
  }
});
console.log("filterPost1 ===", filterPost1);
