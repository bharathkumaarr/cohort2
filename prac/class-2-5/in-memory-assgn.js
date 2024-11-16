const express = require('express');
const app = express();

app.use(express.json());


var users = [{
    name :'john',
    kidneys: [{
        healthy: false
    }]
}]



app.get('/', function(req,res){
    const johnkidneys = users[0].kidneys;
    const numberOfKidneys = johnkidneys.length;
    let numberOfHealthyKidneys = 0;
    for (let i =0; i<johnkidneys.length; i++) {
        if (johnkidneys[i].healthy) {
            numberOfHealthyKidneys = numberOfHealthyKidneys+1;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys-numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

app.post('/', function(req,res){

    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg:'done!'
    })
})

app.listen(3000);