api.call("Get", {
    typeName: "Diagnostic",
    search: {
        sourceSearch: {
            id: "SourceGeotabGoId"
        }
    }
}, function(result) {
    var array = [];
      for (var i = 0; i < result.length; i++){
          let str = result[i].diagnosticType,
              n = str.search(/fault/i);
          if (n > 0) {
              array.push(result[i]);
          }
      }
      console.log("Faults: ", array);
}, function(e) {
    console.error("Error:", e);
});