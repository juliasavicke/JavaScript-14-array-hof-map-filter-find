"use strict";
console.log("postsCreateFilter.js");

const postsData = [
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
const listEl = document.getElementById("list1");

const render = (post) => {
  listEl.innerHTML = "";
  console.log("render");
  post.forEach((pObj) => {
    const newPostEl = createPostLi(pObj);
    listEl.append(newPostEl);
  });
};

const createPostLi = (postObj) => {
  const liEl = document.createElement("li");
  liEl.className = "card";
  liEl.innerHTML = `
  <h3>${postObj.title}</h3>
  <h4>${postObj.author}</h4>
  <p>${postObj.year}</p>`;
  return liEl;
};

const htmlEl = {
  input: document.getElementById("input"),
  btn: document.getElementById("btn"),
};
let filterPost = [];
htmlEl.btn.addEventListener("click", () => {
  filterPost = postsData.filter((postObject) => {
    if (postObject.title.includes(htmlEl.input.value) === true) {
      return true;
    } else if (
      postObject.author
        .toLocaleLowerCase()
        .includes(htmlEl.input.value.toLocaleLowerCase()) === true
    ) {
      return true;
    } else if (
      postObject.year.toString().includes(htmlEl.input.value) === true
    ) {
      return true;
    }
  });

  render(filterPost);
});
console.log("filterPost ===", filterPost);
render(postsData);
