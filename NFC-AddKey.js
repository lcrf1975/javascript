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
            messageContent: {
                driverKey: {
                    driverKeyType: "Nfc",
                    keyId: "0000000020cbcb54",
                    serialNumber: "TH6A7W"
                },
                contentType: "DriverWhiteList",
                clearWhiteList: false,
                addToWhiteList: true
            }
        }
    }, function(result) {
        console.log("Result: ", result);
    }, function(e) {
        console.error("Failed:", e);
    });
});