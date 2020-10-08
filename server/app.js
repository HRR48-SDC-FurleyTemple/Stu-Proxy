const express = require('express');
const app = express();
const axios = require('axios');
const path = require('path');

app.use('/products', express.static('./client/dist'))
app.use('/', express.static('./client/dist'))

app.get('/productOptions', (req, res) => {
  axios.get('http://localhost:3000/main.js')
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    })

})

app.get('/bottomCarousel', (req, res) => {
  axios.get('http://localhost:3001/bundle.js')
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    })
})

app.get('/productView', (req, res) => {
  axios.get('http://localhost:3002/bundle.js')
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    })
})

app.get('/review', (req, res) => {
  axios.get('http://localhost:3003/bundle.js')
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    })
});

app.get('/api/productOptions/products/:id', (req, res) => {
  const { id } = req.params;
  axios.get(`http://localhost:3000/api/productOptions/products/${id}`)
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => {
      res.send(err);
    })
})

app.get('/products/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
})

module.exports = app;
