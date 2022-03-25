api.call("Get", {
    "typeName": "ReprocessRequest",
    "search": {"id":"ac6LITV904EOX_fpRDmA_hQ"
    }
}, function(result) {
    console.log(result)
   }, function(e) {
    console.error("Failed:", e);
});