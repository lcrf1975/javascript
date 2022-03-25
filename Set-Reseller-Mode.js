api.call("Get", {
    typeName: "SystemSettings",
}, function(result) {
    result[0].allowResellerAutoLogin=true;
    api.call("Set", {
        typeName: "SystemSettings",
        entity: result[0]
    });
},function(e) {
    console.error("Failed:", e);
});