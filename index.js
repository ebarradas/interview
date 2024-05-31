const express = require('express');
const path = require('path');
const app = express();
const port = 8081;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ ok: true });
});

app.get('/cars', (req, res) => {
  res.json(cars);
});

// TODO: Add a route that receives an id and returns the car with that id
// TODO: Add a route that receives a make and returns all cars with that make

app.get('/cars/list', (req, res) => {
    // use ejs documentation https://ejs.co/#docs
    res.render('index', { cars: cars });
});

// Start the server
app.listen(port, () => {
  console.log('Server is running');
});