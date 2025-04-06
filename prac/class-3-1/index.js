const express = require('express')
const app = express()

const z = require('zod')
const schema = z.array(z.number())

app.use(express.json())


app.get('/health', (req,res,next)=>{
    // const kidneys = req.body.kidneys;

    res.json({msg: 'health'})
    
})

app.post('/health', (req,res,next)=>{
    
})


app.listen(3000)