"use strict";
console.log("strict");

const clientForm = document.getElementById("clientForm");
const clientList = document.getElementById("clientList");

//create new instanc eof client with cf

const allClients = [];

function Client(name) {
  this.name = name;
  this.render = function () {
    const listItem = document.createElement("li");
    listItem.textContent = this.name;
    clientList.appendChild(listItem);
  };
}
