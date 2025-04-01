const express = require('express')

const app = express()

const users = [
    {
    name: 'john',
    kidneys: [{
        healthy: false
    }]
}];

app.get('/', (req,res)=>{

    const johnKidneys = users[0].kidneys
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    
    for (i=0; i<johnKidneys.length; i++){
        if (johnKidneys[i].healthy) {
            numberOfHealthyKidneys +=1
        }

    }
    const numberOfUnhealthyKidneys = numberOfKidneys-numberOfHealthyKidneys
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys,
    })

})


app.use(express.json())

app.post('/',(req,res)=>{
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({msg: "done!"})
} )
app.listen(3000)