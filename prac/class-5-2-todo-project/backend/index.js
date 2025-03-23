const express = require('express')
const {createTodo, updateTodo} = require('./types')

const app = express()

app.use(express.json())

app.use('/todo', (req,res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.succes){
        return res.status(411).json({
            msg: 'you sent the wrong inputs',
        })
        return;
    }
    // put it in mongodb
})

app.use('/todos', (req,res)=>{
    
})

app.use('/completed', (req,res)=>{ 
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload)
    if (!parsedPayload.succes){
        return res.status(411).json({
            msg: 'you sent the wrong inputs',
        })
        return;
    }
})

const PORT = 3000

app.listen(port, ()=>{
    console.log('server started at ',port )
})