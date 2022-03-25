api.call("Get",{
    typeName:"ExceptionEvent",
    search:{
        fromDate:"2020-11-28T06:00:00.000Z",
        toDate:"2020-12-29T05:59:59.000Z",
        includeOverlappedTrips:true, /*optional*/
        deviceSearch:{"id":"b9"}
        }
}, function(result) {
    console.log("Events: ", result);
}, function(e) {
    console.error("Failed:", e);
});