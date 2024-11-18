// basic express boilerplate code
// express.json() middleware

const { scopePollingDetectionStrategy } = require('@solana/wallet-adapter-base');
const { response } = require('express');
const express = require('express');
const app =express();

app.use(express.json());


app.post('/todo', (req,res)=>{
   
})
app.get('/todos', (req,res)=>{
   
})
app.put('/completed', (req,res)=>{
   
})

