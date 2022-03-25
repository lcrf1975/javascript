api.call("Add",
{
  "typeName": "TextMessage",
  "entity": {
    "isDirectionToVehicle": true,
    "activeFrom": "1986-01-01T00:00:00.000Z",
    "activeTo": "2050-01-01T00:00:00.000Z",
    "messageContent": {
      "contentType": "GoTalk",
      "message": "THIS IS A TEST",
      "urgent": true
    },
    "device": {
      "id": "b1"
    }
  }
});