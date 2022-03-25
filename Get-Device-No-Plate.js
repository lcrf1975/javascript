api.call("Get", {
    "typeName": "Device"
},
function(result){
    for (var i = 0; i < result.length; i++) {
        if (!!result[i].licensePlate) {
			console.log(result[i].id, ",", result[i].serialNumber, ",", result[i].name, ",", result[i].licensePlate);
        }
        else
        {
			console.log(result[i].id, ",", result[i].serialNumber, ",", result[i].name, ",", "NO PLATE");
        }
    }
},
function(e) {
    console.error("Failed:", e)
});