const express = require('express')

const app = express()

app.use(express.json())

// function to return bool if age>14


function isOldEnough(age){
    if(age>=14){
        return true;
    }
    return false
}

function isOldEnoughMiddleware(req,res,next){
    const age = req.query.age
    if (age>=14){
        next()
    } else {
        res.status(411).json({
            msg: 'sorry youre not of the age yet'
        })

    }
}

app.use(isOldEnoughMiddleware);

app.get('/ride1',  (req,res)=>{
    // if (isOldEnough(req.query.age)) {
        res.json({
            msg: ' ride 1 route' 
        })
    // }
    // else {
    //     res.status(411).json({
    //         msg: 'sorry youre not of the age yet'
    //     })
    // }
    

})

app.get('/ride2', (req,res)=>{
    // if (isOldEnough(req.query.age)) {
        res.json({
            msg: ' ride 2 route' 
        })
    // }
    // else {
    //     res.status(411).json({
    //         msg: 'sorry youre not of the age yet'
    //     })
    // }
    

})


app.listen(3000, ()=>{
    console.log('server at 3000')
})