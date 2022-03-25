api.call("Get", {
    typeName: "BinaryData",
    search: {
        deviceSearch: {"id": "b1"},
        fromDate : "2021-10-19T00:00:00.000Z",
        toDate : "2021-10-19T23:59:59.000Z"
    }
}, function(result) {
    console.log("Result: ", result);
}, function(e) {
    console.error("Failed:", e);
});