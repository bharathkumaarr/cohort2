// basic express boilerplate code
// express.json() middleware

const { response } = require('express');
const express = require('express');
const app =express();

app.use(express.json());

// body {
//     tittle: string;
//     description: string;
// }

app.post('/todo', (req,res)=>{
   
})
app.get('/todos', (req,res)=>{
   
})
app.put('/completed', (req,res)=>{
   
})

