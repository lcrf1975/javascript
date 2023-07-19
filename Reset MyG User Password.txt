api.call("Set", {
    typeName : "User",
    entity : {
        name : "teste@mail.com",
        changePassword : true
    }
}, function (results) {
    console.log("Successfully reset existing user's password");
}, console.error);