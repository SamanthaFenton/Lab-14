"use strict";
console.log("trees");

const createButton = document.getElementByT("submit");

const handleCreateButtonClick = function (){
    const clientsFromLs = JSON.parse(localStorage.getItem("clients"));
    for (let i = 0; < clientsFromLs.length; i++){
        const newClient = new Client(clientsFromLs[i].name);
        allClients.push(newClient);
        newClient.render();
    }
}


createButton.addEventListener("click", handleCreateButtonClick)

