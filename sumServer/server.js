const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());


app.get('/', (req, res) => {
  let x = req.query.x;
  let y = req.query.y;
  let sol = parseInt(x)+parseInt(y);
  res.send(`${sol.toString()}`)
})

app.listen(port);