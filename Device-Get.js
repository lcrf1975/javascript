api.call("Get", {
    typeName: "Device",
    search: {
        serialNumber: "G96D2113164B"
    }
}, function(result) {
    console.log("Result: ", result);
}, function(e) {
    console.error("Failed:", e);
});