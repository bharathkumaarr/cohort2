// const express = require('express');
// const app = express.app()
// const {createTodo} = require('./types')

// app.use(express.json())

// app.post('/todo', (req,res)=>{
//     const createPayload = req.body;
//     const parsedPayload = createTodo.safeParse(createPayload);
//     if (!parsedPayload.success){
//         req.status(411).json({
//             msg: "you sent the wrong input"
//         })
//         return;
//     }
// })

// app.post('/todos', (req,res)=>{

// })

// app.put('/completed', (req,res)=>{

// })





// app.listen(3000, ()=>{
//     console.log('running at 3000')
// })




// // const express = require('express')
// // const {createTodo, updateTodo} = require('./types')

// // const app = express()

// // app.use(express.json())

// // app.use('/todo', (req,res)=>{
// //     const createPayload = req.body;
// //     const parsedPayload = createTodo.safeParse(createPayload);
// //     if (!parsedPayload.succes){
// //         return res.status(411).json({
// //             msg: 'you sent the wrong inputs',
// //         })
// //         return;
// //     }
// //     // put it in mongodb
// // })

// // app.use('/todos', (req,res)=>{
// //     //more code
// // })

// // app.use('/completed', (req,res)=>{ 
// //     const updatePayload = req.body;
// //     const parsedPayload = updateTodo.safeParse(updatePayload)
// //     if (!parsedPayload.succes){
// //         return res.status(411).json({
// //             msg: 'you sent the wrong inputs',
// //         })
// //         return;
// //     }
// // })

// // const PORT = 3000

// // app.listen(port, ()=>{
// //     console.log('server started at ',port )
// // })



const express = require('express')
const app = express()
const {createTodo, updateTodo} = require('./types')
const {todo} = require('./db')
require('dotenv').config()
app.use(express.json())
const cors = require('cors')

app.use(cors())

app.post('/todo', async (req,res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if (!parsedPayload.success) {
        res.status(411).json({msg: "you sent the wrong inputs"})
        return
    }

    // put it in mongodb
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: 'todo created'
    })


})
app.get('/todos', async (req,res)=>{
    const todos = await todo.find({})
    res.json({todos})
})
app.put('/completed', async (req,res)=>{
    // res.send('completed')
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload)

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "you sent the wrong inputs"
        })
        return
    }
    //update mongo
    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    })
    res.json({
        msg: "todo marked as completed"
    })

})


app.listen(3000, ()=>{
    console.log('server running on port 3000')
})