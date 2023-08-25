api.call("GetAddresses", {
    "coordinates": [
      {
        "x": "-97.70050",
        "y": "30.41512"
      }
    ]}, function(result) {
    console.log("Done: ", result);
}, function(e) {
    console.error("Failed:", e);
});
/*opt nomin*/