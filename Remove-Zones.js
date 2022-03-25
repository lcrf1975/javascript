api.call("Get", {
    "typeName": "Zone",
        search: {
            name: "%Hospital%"
    },
},
function(result){
    for (var i = 0; i < result.length; i++) {
        api.call("Remove", {
            typeName: "Zone",
            entity: {
                id: result[i].id
           },
        })
    }
    console.log("Transaction: ", result)
},
function(e) {
    console.error("Failed:", e)
});