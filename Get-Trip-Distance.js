var FromDate = "2020-01-01T05:00:00.000Z",
    ToDate = "2020-12-31T23:59:59.000Z",
    Device = "b1";
    
api.call ("Get",{
    typeName: "Trip",
    search: {
        fromDate: FromDate,
        toDate: ToDate,
        includeOverlappedTrips: true, /*optional*/
        deviceSearch: {"id": Device}
        }
}, function(Result) {
    var Distance = 0;
    if (Result.length === 0) {
        console.log("No trip distance found");
    } else {
        for (var I = 0; I < Result.length; I++){
        Distance = Distance + Result[I].distance
    }
        console.log("Trip distance travelled: ", Distance, " km")
    }

}, function(E) {
    console.error("Failed:", E);
});