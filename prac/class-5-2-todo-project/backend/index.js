const express = require('express')

const app = express()

app.use(express.json())

app.use('/todo', (req,res)=>{})
app.use('/todos', (req,res)=>{})
app.use('/completed', (req,res)=>{})

const PORT = 3000

app.listen(port, ()=>{
    console.log('server started at ',port )
})