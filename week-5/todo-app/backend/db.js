const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://atharvadhumal256:atharvad24@atharva.6jxte.mongodb.net/todos")


const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema)
module.exports = {
     todo //exported one line up file
}