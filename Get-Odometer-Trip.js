var fromDate = "2022-11-1T00:00:00.000Z",
    toDate = "2022-11-22T23:59:59.000Z",
    device = "bc"

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
            distance_gps = 0,
            distance_odo = 0,
            fuelUsed,
            efficiency_gps,
            efficiency_odo;
        
        if (odometerData.length === 0) {
            console.log("No odometer found for device");
        } else {
            initialOdo = 0.001 * odometerData[0].data,
            finalOdo = 0.001 * odometerData[odometerData.length - 1].data,
            console.log("Initial odometer: ", initialOdo, " km"),
            console.log("Final odometer: ", finalOdo, " km"),
            distance_odo = finalOdo - initialOdo
        }
        
        if (tripData.length === 0) {
            console.log("No trip distance found");
        } else {
            for (var i = 0; i < tripData.length; i++){
                distance_gps = distance_gps + tripData[i].distance
            }
            console.log("Trip distance travelled: ", distance_gps, " km"),
            console.log("Odometer distance travelled: ", distance_odo, " km")
        }
        if (fuelUsedData.length === 0) {
            console.log("No fuel consumption found for device");
        } else {

            fuelUsed = fuelUsedData[fuelUsedData.length - 1].data - fuelUsedData[0].data,
            efficiency_gps = distance_gps / fuelUsed,
            efficiency_odo = distance_odo / fuelUsed,
            console.log("Fuel consumption: ", fuelUsed, " l"),
            console.log("Fuel economy (GPS): ", efficiency_gps," km/l"),
            console.log("Fuel economy (Odometer): ", efficiency_odo," km/l")
        }
    },

    function(e){
        console.error(e)
    }
    
);
