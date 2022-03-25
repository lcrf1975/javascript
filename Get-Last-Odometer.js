var device = "b1"

api.multiCall([
    
    // Get diagnostic #1
    ["Get",{
        typeName: "StatusData",
        search: {
            diagnosticSearch: {
                id: "diagnosticOdometerId"
            },
            deviceSearch: {
                id: device
            }
        }
    }]
],
    function(result){
        
        var odometerData = result[0],
            finalOdo;
        
        if (odometerData.length === 0) {
            console.log("No odometer found for device");
        } else {
            finalOdo = 0.001 * odometerData[odometerData.length - 1].data,
            console.log("Final odometer: ", finalOdo, " km")
        }
    },
    function(e){
        console.error(e)
    }
);