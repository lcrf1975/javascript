var mySerial = "your serial here",
    //myFromDate = new Date("2021-02-01T05:00:00.000Z").toISOString(),
    //myToDate = new Date("2021-02-08T04:59:59.999Z").toISOString()

api.call("Get", {
    typeName: "FuelTransaction",
    search: {
        serialNumber: mySerial,
        //fromDate: myFromDate,
        //toDate: myToDate,
        includeSourceData: false
    },
},
function(result){
    for (var i = 0; i < result.length; i++) {
        api.call("Remove", {
            typeName: "FuelTransaction",
            entity: {
                id: result[i].id
            }
        })
    }
    console.log("Transaction: ", result)
},
function(e) {
    console.error("Failed:", e)
});

api.call("RemoveAll", {
    typeName: "FuelTransaction",
}, function(result) {
    console.log("Done: ", result);
}, function(e) {
    console.error("Failed:", e);
});