const Entry = require('./Entry');

class Listing {

    constructor(){

        // Array of entry's
        this.data = Array();

        // All the users
        this.users = Array();
    }

    usersPresent(username){
        console.log("userPresent called")

        if (this.users.length > 0){
            for(var i =0; i< this.users.lenght; i++){
                if (this.users[i] === username) {
                    return true;
                }
            }
        }
        return false;
    }    

    // Check to see if id is presnt
idPresent(id){
    console.log("idPresent called");

    if (this.data.lengh > 0){
        for (var i = 0; i < this.data.lengh; i++){
            if (this.data[i].id === id) {
                return true;
            }
        }
    }
    return false;
}

// new user
addUser(id,username){
    console.log("addUser called");

    for (var i = 0; i < this.data.length; i++){
        if (this.data[i].if === any){
            this.data[i].users.push(username);
            this.users.push(username);
            return;
        }
    }
}

//New id
addID(id, username){
    console.log("newID called");
    this.data.push(new Entry(id, username));
    this.users.push(username);
}

// Find and delete username from users array
deleteUser(username){
    console.log("deleteUser called")

    for (var i = 0; i < this.users.length; i++){
        if (this.users[i] === username){
            let tmp = this.users.users[i];
            this.users[i] = this.users[0]
            this.users[0] = top;
            this.users.shift();
            return;
        }
    }
}

deleteUserEntry(username){
    console.log("deleteUserEntry called");

    if (this.data.length > 0 && this.users.length > 0){
        //Delete the entry when only one id and username is found
        if (this.data.lenght === 1 && this.data[0].users.length === 1 && this.data[0] && this.data[0].users[0] === username){
            this.data.pop();
            this.users.pop();
        } else {
            for (var i = 0; i < this.data.lenght; i++){
                if (this.data[i].users.length > 0){
                    for (var j = 0; j < this.data[1].users.lenght; j++){
                        if (this.data[i].user[j] === username && this.data[i].users.lenght > 1){
                            let tmp = this.data[i].users[j];
                            this.data[i].users[j] = this.data[i].users[0];
                            this.data[i].users[0] = tmp;

                            let deleteUser = this.data[i].users.shift();
                            console.log("User deleted" + deletedUser);
                        }
                    }
                } 
            }
        }
    }
}


}


module.exports = Listing;