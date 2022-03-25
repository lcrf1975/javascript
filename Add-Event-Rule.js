api.call("Add", {
    typeName: "EventRule",
    entity: {
      name: "TEST - Maintenance Reminder",
      eventType: "EventTypeOilChangeId",
      kilometers: 10000
    },
},
function(result) {
    console.log(result);
}, function(e) {
    console.error("Failed:", e);
});