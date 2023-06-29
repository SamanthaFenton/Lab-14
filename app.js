"use strict";
console.log("strict");

const clientForm = document.getElementById("clientForm");
const clientList = document.getElementById("clientList");

//create new instanc of client with cf and creating an array for clint to go into

const allClients = [];

function Client(name) {
  this.name = name;
  this.render = function () {
    const listItem = document.createElement("li");
    listItem.textContent = this.name;
    clientList.appendChild(listItem);
  };
}

function handleClientSubmit() {
  event.preventDefault();
  const newClient = newClient(event.target.Name.value);
  allClients.push("newCat");
  clientForm.reset();
  newClient.render();
}
