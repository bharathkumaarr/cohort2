const mongoose = require('mongoose')
require('dotenv').config()


mongoose.connect(process.env.MONGODB)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));


const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
})

const todo = mongoose.model('todos', todoSchema)
module.exports = {
    todo:todo
}