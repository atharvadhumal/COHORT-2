const express = require("express")
const app = express();

const users = [
    {
        users: "john",
        kidneys: [{
            healthy : false 
        
        }]
    }];

    app.use(express.json())

    //query parameter /? means we can ask something with this
app.get("/", function(_req, res) {
    const johnKidneys = users[0].kidneys;  //it will call line 8 which means user is john and kidney that is healthy false
    const numberOfKidneys = johnKidneys.length; //tell number of kidney the user has
    let numberOfHealthyKidneys = 0; //considers the healthy kidney value as 0
    for (let i = 0; i<johnKidneys.length; i++) { 
        if (johnKidneys[i].healthy) { //The loop starts at i = 0. It checks johnKidneys[i].healthy, which is false so numberofHealtyKidneys remains 0 but if john would had healthy true then i = 1 and numberofHealthyKidney = 1
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;

        }
    }
    numberOfUnhealthyKidneys= numberOfKidneys- numberOfHealthyKidneys; //it will subtract total kidneys from healthy kidney.
    res.json(  //res means response means it output will come in all the tree context given below.
        {
            numberOfKidneys,
            numberOfHealthyKidneys,
            numberOfUnhealthyKidneys
        }
    )
})

//in post we post data into the body
app.post("/", function(_req,res){
    const isHealthy = _req.body.isHealthy  //it will send a post req of healthy is healthy or not
    users[0].kidneys.push({
        healthy: isHealthy //it will call the isHealthy and tell healthy is true or false
        //and it will add one kidney to numberOfKidney and display a msg DONE
    })
    res.json({
        msg: "DONE!"
    })

})

app.put("/", function(_req,res){
    for(let i = 0; i<users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true; //reset all to healthy kidney, unhealthy kidney became healthy and healthy one stayed healthy
    }
    res.json({});

})

app.delete("/", function(_req,res) {
    
}

app.listen(3000);

