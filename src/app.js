const express = require('express');

const app = express();

app.listen(3000, (req, res) => {
  console.log('connected');
})



// if we use app.use -> handles all get put post -> and 1st route which matches the path will execute,others will not override
// any route starts with /test will be matched here

app.use('/test', (req, res) => {
  res.send('test')
})

app.use('/test/123', (req, res) => {
  res.send('test/123')
})

app.use('/test/123/1', (req, res) => {
  res.send('test/123/1')
})


app.get('ab?c', (req, res) => {
  console.log('b is optional here');
})

app.get('ab+c', (req, res) => {
  console.log('we can have any number of b here');
})