"use strict";
console.log("Data");

if (localStorage.clients) {
  const clientsFromLs = JSON.parse(localStorage.getItem("clients"));
  //console.log("catsFromLs");
  for (let i = 0; i < clientsFromLs.length; i++) {
    let newClient = new Client(clientsFromLs[i].name);
    allClients.push(newClient);
  }
}

clientForm.addEventListener("submit", handleClientSubmit);
