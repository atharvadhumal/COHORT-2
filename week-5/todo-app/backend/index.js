const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const app = express()
const cors = require("cors")
const port = 3000

app.use(express.json());
app.use(cors());


app.post('/todo',async function(req, res) {
    const createPayload = req.body; //extracts the req body , contains data sent by client
    const parsedPayload = createTodo.safeParse(createPayload) //safeParse is used to validate goes to types.js file and then checks the schema
    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "you send wrong inputs" //sends error msg
        })
        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false

    })
    res.json({
        msg: 'Todo created'
    })
})

app.get('/todos', async function(req, res) {  
    const todos = await todo.find({});

    res.json({
        todos
    })

})

app.put('/completed', async function (req, res) {
    const updatePayload = req.body
    const parsedPayload = updateTodo.safeParse(updatePayload)
    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "you send wrong inputs" //sends error msg
        })
        return;
    }
    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    })
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})