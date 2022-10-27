"use strict";
console.log("uzd.js");

const people = [
  {
    name: "Jonas",
    surname: "Jonaitis",
    sex: "male",
    age: 26,
    income: 1200,
    married: false,
    hasCar: false,
  },
  {
    name: "Severija",
    surname: "Piktutytė",
    sex: "female",
    age: 26,
    income: 1300,
    married: false,
    hasCar: true,
  },
  {
    name: "Valdas",
    surname: "Vilktorinas",
    sex: "male",
    age: 16,
    income: 0,
    married: false,
    hasCar: false,
  },
  {
    name: "Virginijus",
    surname: "Uostauskas",
    sex: "male",
    age: 32,
    income: 2400,
    married: true,
    hasCar: true,
  },
  {
    name: "Samanta",
    surname: "Uostauskienė",
    sex: "female",
    age: 28,
    income: 1200,
    married: true,
    hasCar: true,
  },
  {
    name: "Janina",
    surname: "Stalautinskienė",
    sex: "female",
    age: 72,
    income: 364,
    married: false,
    hasCar: false,
  },
];

// 1. Naudojant Array.prototype.forEach atspausdinti visus vyrus.
people.forEach((pObj) => {
  if (pObj.sex === "male") console.log("Vyrai: ", pObj);
});

// 2. Naudojant Array.prototype.forEach atspausdinti visas moteris jaunesnes nei 35 metai.
people.forEach((pObj) => {
  if (pObj.sex === "female" && pObj.age < 35)
    console.log("Moterys <35 : ", pObj);
});

// 3. Naudojant Array.prototype.forEach atspausdinti visus žmones kurie turi mašinas.

// 4. Naudojant Array.prototype.forEach atspausdinti visus susituokusius žmones.

// 5. Naudojant Array.prototype.forEach atspausdinti visų vairuojančių žmonių lytį.

// 6. Naudojant Array.prototype.forEach ir globalius kintamuosius,
//    suskaičiuoti vairuojančių moterų ir vyrų kiekius, bei juos atspausdinti.

// 7. Pagal people masyvą, naudojant Array.prototype.map, suformuokite masyva su objektais, kurie turės savybes sex ir income

// 8. Pagal people masyvą, naudojant Array.prototype.map, suformuokite masyva pakeičiant savybę 'income' į 'salary'
const newPeople = people.map((pObj) => ({
  name: pObj.name,
  surname: pObj.surname,
  sex: pObj.sex,
  age: pObj.age,
  salary: pObj.income,
  married: pObj.married,
  hasCar: pObj.hasCar,
}));
console.log("newPeople ===", newPeople);
// 9. Pagal people masyvą, naudojant Array.prototype.map, suformuokite masyva kuriame nebūtų lyties, vardo ir pavardės
const newPeople1 = people.map((pObj) => ({
  age: pObj.age,
  salary: pObj.income,
  married: pObj.married,
  hasCar: pObj.hasCar,
}));
console.log("newPeople1 ===", newPeople1);
// 10. Pagal people masyvą, naudojant Array.prototype.map, suformuokite masyvą kur savybės name ir surname būtų pakeistos viena savybe - fullname
const newPeople2 = people.map((pObj) => ({
  fullname: pObj.name + " " + pObj.surname,
  sex: pObj.sex,
  age: pObj.age,
  salary: pObj.income,
  married: pObj.married,
  hasCar: pObj.hasCar,
}));
console.log("newPeople2 ===", newPeople2);
