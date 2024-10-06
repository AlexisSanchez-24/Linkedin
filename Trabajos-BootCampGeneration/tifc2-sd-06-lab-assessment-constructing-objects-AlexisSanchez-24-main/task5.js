

// Type your code below this line!

function FriendsList() {
    this.names = [];
}

FriendsList.prototype.addName = function(name) {
    this.names.push(name);
};

FriendsList.prototype.printList = function() {
    console.log(this.names);
};

const prompt = require("prompt-sync")();

function createFriendsList() {
    var friendsList = new FriendsList();
    
    var numberOfNames = parseInt(prompt("cuantos nombres quieres agregar a la lista?"), 10);
    
    if (isNaN(numberOfNames) || numberOfNames <= 0) {
        console.log("ingresa un número valido.");
        return;
    }
    
    for (var i = 0; i < numberOfNames; i++) {
        var name = prompt("Ingresa el nombre #" + (i + 1) + ":");
        friendsList.addName(name);
    }
    
    friendsList.printList();
}

createFriendsList();

// Type your code above this line!

