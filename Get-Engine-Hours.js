var date = new Date(),
 deviceCache = [], 
 calls = [],
 statusCache = [];
date = date.toISOString();

var grabDevices = async function(date, deviceCache, calls) {
 api.call("Get", {"typeName": "Device",
 "search": {
 "fromDate": date
 }
 }, async function(devices) {
 var no = 1;
 deviceCache = devices;
 for (var device in deviceCache) {
 calls.push([
 "Get",
 {
 "typeName": "StatusData",
 "search": {
 "diagnosticSearch": {
 "id": "DiagnosticEngineHoursAdjustmentId"
 },
 "deviceSearch": {
 "id": deviceCache[device].id
 },
 "fromDate": "2018-08-08T00:00:00.000Z"
 }
 }
 ])
 
 }
 statusCache = statusCache.conct(await sendRequests(calls))
 })
}

var sendRequests = function(calls) {
 return new Promise(resolve => {
 api.multiCall(calls, function(success) {
 console.log(success);
 }, function(fail) {
 console.log(fail)
 });
 })
}

grabDevices(date, deviceCache, calls);

***** SIMPLE VERSION *****

api.call(
  'Get',
  {
    typeName: 'Diagnostic',
    search: { name: '%engine hours%' },
  },
  function (result) {
    for (let i = 0; i < 10; i++) {
      console.log(result[i].name, result[i].id);
    }
  },
  function (e) {
    console.error('Failed:', e);
  }
);