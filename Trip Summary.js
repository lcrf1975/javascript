var results = [];

api.call("Get", {
    typeName: "Device",
    resultsLimit: 100       //comment this line to run over the entire database
}, function (devices) {
    var fromDate = "2020-02-23T05:00:00.000Z",
        toDate = "2021-02-23T04:59:59.999Z",
        calls = []

    devices.forEach(function (device) {
        results.push({
            myId: device.id,
            myName: device.name,
            mySerial: device.serialNumber,
            myVin: device.vehicleIdentificationNumber
        });
        calls.push({
            method: "Get",
            params: {
                typeName: "Trip",
                search: {
                    fromDate: fromDate,
                    toDate: toDate,
                    deviceSearch: device
                }
            }
        });
    });
    
    api.call("ExecuteMultiCall", {
        calls: calls
    }, function (callResults) {
        var tripData = [],
            totalDistance = []
        
        for (var i = 0; i < callResults.length; i++) {
            tripData = callResults[i],
            totalDistance = 0
            if (tripData) {
                for (var j = 0; j < tripData.length; j++){
                    totalDistance = totalDistance + tripData[j].distance
                }
                results[i].distance = totalDistance
            }
        }
        console.log(results);
    });
});