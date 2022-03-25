api.call("Get", {
    "typeName": "IoxAddOn",
    "search": {
        "deviceSearch":{
            "id": "bXXX"
        }
    }
}, function(result) {
    console.log("Done: ", result);
}, function(e) {
    console.error("Failed:", e);
});