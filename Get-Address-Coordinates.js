api.call("GetCoordinates", {
    addresses: [
        '1081 South Service Rd W, Oakville',
        'Kaiserstrasse 100, 52134 Herzogenrath'
    ]
}, function(result) {
    console.log("Done: ", result);
}, function(e) {
    console.error("Failed:", e);
});