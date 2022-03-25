api.call ("Get",{
    typeName: "Device",
}, function(Result) {
        if (Result.length === 0) {
            console.log("No device found");
        } else {
            for (var I = 0; I < Result.length; I++){
                console.log(Result[I].id)
        }
    }
}, function(E) {
    console.error("Failed:", E);
});