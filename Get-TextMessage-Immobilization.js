api.call("Get", {
    "typeName": "TextMessage",
    "search": {
        "contentType": "Immobilization",
        "modifiedSinceDate": "2023-03-30T23:59:59.000Z",        
        "deviceSearch": {
            "id": "bD3"
        }
    }
}, function(result) {
    console.log("Done: ", result);
}, function(e) {
    console.error("Failed:", e);
})