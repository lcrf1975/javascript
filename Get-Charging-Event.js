api.call("Get",
{
    "typeName": "ChargeEvent",
    search:
    {
        fromDate:"2021-05-03T03:00:00.000Z",
        toDate:"2021-05-04T02:59:59.000Z",
        includeHistoric:true,
        deviceSearch:{"id":"bA"}
    }
}, function(result) {
    console.log("Done: ", result);
}, function(e) {
    console.error("Failed:", e);
});