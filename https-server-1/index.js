const express = require('express') //imports a library called as express which helps in backend

const app = express();
const port = 3000

app.get('/', function(_req, res) {   // this is similar to this fs.readFile("pathfile", "utf-8", (_err, data)
  res.send('Hello World!')
})

app.listen(port)