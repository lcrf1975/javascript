api.call("Get", {
    typeName: "Device",
    search: {
        serialNumber: "G96D2113164B"
    }
}, function(device) {
    device[0].disableBuzzer = false;
    api.call("Set", {
        typeName: "Device",
        entity: device[0]
    }, function(result) {
        console.log("Result: ", result);
    }, function(e) {
        console.error("Failed:", e);
    });
});