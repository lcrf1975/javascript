var fromDate = "2020-01-01T05:00:00.000Z",
    toDate = "2020-12-31T23:59:59.000Z",
    device = "b1"

api.multiCall([
    
    // Get diagnostic #1
    ["Get",{
        typeName: "StatusData",
        search: {
            fromDate: fromDate,
            toDate: toDate,
            diagnosticSearch: {
                id: "diagnosticOdometerId"
            },
            deviceSearch: {
                id: device
            }
        }
    }],
    
    // Get diagnostic #2
    ["Get",{
        typeName: "StatusData",
        search: {
            fromDate: fromDate,
            toDate: toDate,
            diagnosticSearch: {
                id: "DiagnosticDeviceTotalFuelId"
            },
            deviceSearch: {
                id: device
            }
        }
    }],
    
    // Get Trip data
    ["Get",{
        typeName: "Trip",
        search: {
            fromDate: fromDate,
            toDate: toDate,
            deviceSearch: {
                id: device
            }
        }
    }]
],

    function(result){
        
        var odometerData = result[0],
            fuelUsedData = result[1],
            tripData = result[2],
            initialOdo,
            finalOdo,
            distance = 0,
            fuelUsed,
            efficiency;
        
        if (odometerData.length === 0) {
            console.log("No odometer found for device");
        } else {
            initialOdo = 0.001 * odometerData[0].data,
            finalOdo = 0.001 * odometerData[odometerData.length - 1].data,
            console.log("Initial odometer: ", initialOdo, " km"),
            console.log("Final odometer: ", finalOdo, " km")
        }
        
        if (tripData.length === 0) {
            console.log("No trip distance found");
        } else {
            for (var i = 0; i < tripData.length; i++){
                distance = distance + tripData[i].distance
            }
            console.log("Trip distance travelled: ", distance, " km")
        }
        
        if (fuelUsedData.length === 0) {
            console.log("No fuel consumption found for device");
        } else {
            fuelUsed = fuelUsedData[fuelUsedData.length - 1].data - fuelUsedData[0].data,
            efficiency = distance / fuelUsed,
            console.log("Fuel consumption: ", fuelUsed, " l"),
            console.log("Fuel economy: ", efficiency, " km/l")
        }
        
    },

    function(e){
        console.error(e)
    }
    
);