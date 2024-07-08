//Array innehållandes flera objekt
let persons = [
  {
    name: "Felicia",
    age: 12,
  },
  {
    name: "Pelle",
    age: 20,
  },
  {
    name: "Peter",
    age: 59,
  },
  {
    name: "Anna",
    age: 32,
  },
  {
    name: "Jocke",
    age: 18,
  },
  {
    name: "Ella",
    age: 3,
  },
];

/* 1 */
/* Gör en array som innehåller 5 st olika frukter av datatypen string. */

let fruits = ["apple", "banana", "orange", "cherry", "pineapple"];
console.log("Uppgift 1 " + fruits);

/* 2 */
/* Gör en array som innehåller 3 olika datatyper, ex. string, number, array. */

let dataTyper = ["minString", 32, fruits];
console.log("Uppgift 2 " + dataTyper);

/* 3 */
let animals = ["cat", "hamster", "parrot", "funky chihuahua"];
/* console.log() hur många objekt arrayen ovan innehåller. */
console.log("Uppgift 3 längd: " + animals.length);

/* 4 */
let animals4 = ["cat", "hamster", "parrot", "funky chihuahua"];
/* I arrayen ovan, hämta cat. */
console.log("Uppgift 4  " + animals4.at(0));

/* 5 */
let animals5 = ["cat", "hamster", "parrot", "funky chihuahua"];
/* I arrayen ovan, hämta funky chihuahua. */
console.log("Uppgift 5 " + animals5.at(-1));

/* 6 */
let animals6 = ["cat", "hamster", "parrot", "funky chihuahua"];
/* I arrayen ovan, byt ut hamster mot tiger. */
animals6[1] = "tiger";
console.log("Uppgift 6 " + animals6);

/* 7 */
let a = [1, 2, 3];
let b = [4, 5, 6];
let merged = a.concat(b);
/* Sätt ihop ovanstående arrayer. */
console.log("Uppgift 7 " + merged);

/* 8 */
let a8 = [1, 2, 3, 7, 8, 9];
let b8 = [4, 5, 6];
a8[3] = b8;
/* Merga in array b på index 3 i array a.. */
console.log("Uppgift 8  " + a8);

/* 9 */
let arr = ["a", "b", "c"];
let clonedarr = arr.slice();
/* Klona ovanstående array. */

console.log("Uppgift 9 " + clonedarr);

/* 10 */
let fruits10 = ["kiwi", "apple", "pear"];
fruits10.push("strawberry");
/* Lägg till en frukt i slutet av arrayen ovan. */
console.log("Uppgift 10 " + fruits10);

/* 11 */
let fruits11 = ["kiwi", "apple", "pear"];
/* Lägg till en frukt i början av arrayen ovan. */
fruits11.unshift("mango");
console.log("Uppgift 11 " + fruits11);

/* 12 */
let fruits12 = ["kiwi", "apple", "pear"];
/* I arrayen ovan, ta bort sista frukten i arrayen. */
fruits12.pop();
console.log("Uppgift 12 " + fruits12);

/* 13 */
let fruits13 = ["kiwi", "apple", "pear"];
/* I arrayen ovan, ta bort första frukten i arrayen. */
fruits13.shift();
console.log("Uppgift 13 " + fruits13);

/* 14 */
let fruits14 = ["kiwi", "apple", "pear"];
/* Sätt in en frukt i arrayen ovan på index 1. */
fruits14.splice(1, 0, "mango");
console.log("Uppgift 14 " + fruits14);

/* 15 */
let fruits15 = ["kiwi", "apple", "pear"];
/* Sätt in, tre frukter i arrayen ovan på index 2. */
fruits15.splice(2, 0, "strawberry", "mango", "pineapple");
console.log("Uppgift 15 " + fruits15);

/* 16 */
let names = ["David", "Christoffer", "Johan", "Maja"];
names.splice(1, 2);
/* I arrayen ovan, ta bort Christoffer och Johan. */
console.log("Uppgift 16 " + names);

/* 17 */
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
nums.reverse();
/* Spegelvänd på arrayen ovan. */
console.log("Uppgift 17 " + nums);

/* 18 */
let str = "Supercalifragilisticexpialidocious";
/* Kika om strängen ovan innehåller bokstaven n. */
let i = str.indexOf("n");
console.log("Uppgift 18 " + i);

/* 19 */
let str19 = "Supercalifragilisticexpialidocious";
let i19 = str19.indexOf("x");
/* Kika om strängen ovan innehåller bokstaven x. */
console.log("Uppgift 19 " + i19);

/* 20 */
let str20 = "Supercalifragilisticexpialidocious";
/* I ovanstående sträng, hitta vilket position första förekomsten av p har. */
let i20 = str20.indexOf("p");
console.log("Uppgift 20 " + i20);

/* 21 */
let str21 = "Supercalifragilisticexpialidocious";
/* I strängen ovan, plocka fram de 5 första tecknena. */
let firstFive = str21.slice(0, 5);

console.log("Uppgift 21  " + firstFive);

/* 22 */
let str22 = "Supercalifragilisticexpialidocious";
/* I strängen ovan, plocka fram de 7 sista tecknena. */

let lastSeven = str22.slice(-7);

console.log("Uppgift 22 " + lastSeven);

/* 23 */
let numArray = [23, 45, 5, 62, 1, 21, 3, 54];
/* I arrayen ovan, filtera fram alla nummer över 5. Tips: Läs dokumentationen för filter() */
let aboveFive = numArray.filter(findFive);
function findFive(n) {
  return n > 5;
}
console.log("Uppgift 23 " + aboveFive);

/* 24 */
let numArray24 = [23, 45, 5, 62, 1, 21, 3, 54];
/* I arrayen ovan, filtera fram alla nummer under 5. Tips: Läs dokumentationen för filter() */
let underFive = numArray24.filter(findUFive);
function findUFive(n) {
  return n < 5;
}

console.log("Uppgift 24 " + underFive);

/* 25 */
/* Skriv ut alla namn som är 18 år eller över från arrayen längst upp i dokumentet. */

let overEighteen = persons.filter((persons) => persons.age > 18);

overEighteen.forEach(function (element) {
  console.log(element.name + " är över 18");
});

/* 26 */
/* Skriv ut alla namn som är under 18 år från arrayen längst upp i dokumentet. */
console.log("Uppgift 26");

let underEighteen = persons.filter((persons) => persons.age < 18);

underEighteen.forEach(function (element) {
  console.log(element.name + " är under 18");
});

/* 27 */
let arr27 = ["beta", "alfa", "gamma"];
/* Sortera ovanstående array alfabetisk. Tips: Läs dokumentattionen för sort() */
console.log("Uppgift 27");
console.log(arr27.sort());

/* 28 */
let nums28 = [1, 5, 7, 9, 3, 4, 2, 6, 8];
/* Sortera ovanstående array numeriskt. */
console.log("Uppgift 28");
console.log(nums28.sort());

/* 29 */
/* I person-arrayen längst upp i dokumentet, sortera objekten efter ålder, yngst först. */
console.log("Uppgift 29");
console.log(persons.sort((a, b) => a.age - b.age));

/* 30 */
/* I person-arrayen längst upp i dokumentet, sortera objekten efter ålder, äldst först. */
console.log("Uppgift 30");
console.log(persons.sort((a, b) => b.age - a.age));

/* 31 */
/* I person-arrayen längst upp i dokumentet, sortera objekten i bokstavsordning efter deras namn */
console.log("Uppgift 31");
console.log(
  persons.sort((a, b) => {
    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  })
);

/* 32 */
/* I person-arrayen längst upp i dokumentet, gör om alla namn till versaler. */
console.log("Uppgift 32");

persons.forEach((persons) => (persons.name = persons.name.toUpperCase()));

console.log(persons);

/* 33 */
/* I person-arrayen längst upp i dokumentet, spegelvänd alla namn. */
console.log("Uppgift 33");

persons.forEach((persons) => {
  let mySplit = persons.name.split("");
  persons.name.reverse;
});

console.log(persons);

/* 34 */
/* let fruits = ['apelsin', 'päron', 'äpple', 'kiwi']; */
/* Loopa ut följande array med en forEach()-loop. console.log() varje ord. */
console.log("Uppgift 34");

/* 35 */
/* let fruits = ['apelsin', 'päron', 'äpple', 'kiwi']; */
/* Loopa ut följande array med en for of-loop. console.log() varje ord. */
console.log("Uppgift 35");

/* 36 */
/* let fruits = ['apelsin', 'päron', 'äpple', 'kiwi']; */
/* Loopa ut följande array med en for-loop. console.log() varje ord. */
console.log("Uppgift 36");

/* 37 */
/* let fruits = ['apelsin', 'päron', 'äpple', 'kiwi']; */
/* Loopa ut följande array. För varje varv i loopen ska du också skriva ut index. ex: */
/* 0 - apelsin */
/* 1 - päron */
/* 2 - äpple */
/* osv... */
console.log("Uppgift 37");
