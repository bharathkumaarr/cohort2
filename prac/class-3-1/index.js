const express = require('express')
const app = express()

const zod = require('zod')                      // {z}=require('zod')
const schema = zod.array(zod.number())          // = z.number()

app.use(express.json())


app.get('/health', (req,res,next)=>{
    // const kidneys = req.body.kidneys;

    res.json({msg: 'health'})
    
})

app.post('/health-checkup', (req,res,next)=>{
    console.log("Request body:", req.body); 
    // const kidneys = req.body.kidneys;
    // const response = schema.safeParse(kidneys)


    // // const kidneyLength = kidneys.length;
    // // res.send('you have ' + kidneyLength + ' kidneys')

    // res.send({
    //     response
    // })
})


app.listen(3000)