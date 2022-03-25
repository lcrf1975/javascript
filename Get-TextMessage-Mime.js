api.call("Get", {
    "typeName": "TextMessage",
    "search": {
        "contentTypes": ["MimeContent"],
        "modifiedSinceDate": "2021-01-01T23:59:59.000Z",        
        "deviceSearch": {
            "id": "b1"
        }
    },
    "resultsLimit": 10
}, function(result) {
    console.log("Done: ", result);
}, function(e) {
    console.error("Failed:", e);
})