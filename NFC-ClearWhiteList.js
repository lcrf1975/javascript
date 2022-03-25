api.call("Get", {
    typeName: "Device",
    search: {
        serialNumber: "G9E921132AF3"
    }
}, function(device) {
    api.call("Add", {
        typeName: "TextMessage",
        entity: {
            device: {
                id: device[0].id
            },
            isDirectionToVehicle: true,
			messageContent:{
				driverKey: null,
				contentType: "DriverWhiteList",
				clearWhiteList: true,
				addToWhiteList: false
			}
        }
    }, function(result) {
        console.log("Result: ", result);
    }, function(e) {
        console.error("Failed:", e);
    });
});