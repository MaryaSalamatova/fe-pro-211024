const header = document.getElementById("main-header");
console.log("Header:", header);

const section = document.getElementById("main-section");
console.log("Section:", section);

const div = document.getElementById("main-div");
console.log("Div:", div);


const headersByClass = document.getElementsByClassName("header");
console.log("Елементи з класом 'header':", headersByClass);

const containersByClass = document.getElementsByClassName("container");
console.log("Елементи з класом 'container':", containersByClass);


const allSections = document.getElementsByTagName("section");
console.log("Елементи section:", allSections);

const allDivs = document.getElementsByTagName("div");
console.log("Елементи div:", allDivs);


const firstItem = document.querySelector("ul li:first-child");
console.log("Перший елемент списку:", firstItem);

const lastItem = document.querySelector("ul li:last-child");
console.log("Останній елемент списку:", lastItem);

const thirdItem = document.querySelector("ul li:nth-child(3)");
console.log("Третій елемент списку:", thirdItem);


const allListItems = document.querySelectorAll("ul li");
console.log("Всі елементи списку:", allListItems);


const listItemsArray = Array.from(allListItems);
console.log("Масив елементів li:", listItemsArray);
