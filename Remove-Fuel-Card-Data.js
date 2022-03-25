var resultsSerials = [];

api.call("Get",
{
        "typeName":"FuelTransaction",
        "search" : 
        {
            "fromDate" : "2021-01-01T01:56:00.000Z"
        }
        
},
function(result)
{
    console.log("Show the objects found");
    console.log(result);
    console.log("Show how many records have been found");
    console.log(result.length);
    for (var k=0;k<result.length;k++)
    {
        
        
        resultsSerials.push(
            {
                id : result[k].id,
                //licencePlate : result[k].licencePlate,
                //dateTime : result[k].dateTime
            }
            );
        
        
        // Section needed to delete the records
        
        api.call(
                "Remove",
                {"typeName":"FuelTransaction",
                "entity": 
                {
                    "id": result[k].id 
                }
                }
                );
        
    }
}
);