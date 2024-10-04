const express = require('express');

const app = express();

app.listen(3000, (req, res) => {
  console.log('connected');
})



// if we use app.use -> handles all get put post -> and 1st route which matches the path will execute,others will not override
// any route starts with /test will be matched here
/*
app.use('/test', (req, res) => {
  res.send('test')
})

app.use('/test/123', (req, res) => {
  res.send('test/123')
})

app.use('/test/123/1', (req, res) => {
  res.send('test/123/1')
})


app.get('/ab?c', (req, res) => {
  res.send('b is optional here');
})

app.get('/ab+c', (req, res) => {
  res.send('we can have any number of b here');
})

app.get('/ab*cd', (req, res) => {
  res.send('started with ab and end with cd');
})

app.get('/(ab)*cd', (req, res) => {
  res.send('ab is optional');
})

*/

// we can pass any number of route handlers , to execute -> call next() in prev handler
// or pass 2nd arguments as an array
app.use('/home', (req, res, next) => {
  console.log('1st response');
  next();
}, (req, res, next) => {
  console.log('2nd response');
  res.send('2nd response')
})