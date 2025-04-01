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


app.put('/', (req,res)=>{
    for (let i = 0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true; 

    }
    res.json({msg: 'done put'})
})

//remove all the unhealthy kidneys
app.delete('/', (req,res)=>{
    const newKidneys = []
    for (let i =0; i< users[0].kidneys.length; i++){
        if (users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy: true
            })
        }
    }
    users[0].kidneys = newKidneys
    res.json({msg: 'delete done'})
})
app.listen(3000)