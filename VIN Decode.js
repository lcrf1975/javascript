api.call("DecodeVins", {
    "vins":["your vin here"]
}, function(result) {
    console.log("Done: ", result);
}, function(e) {
    console.error("Failed:", e);
});