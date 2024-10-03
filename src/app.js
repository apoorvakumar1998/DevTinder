const express = require('express');

const app = express();

app.listen(3000, (req, res) => {
  console.log('connected');
})


app.get('/test', (req, res) => {
  res.send(req.path)
})