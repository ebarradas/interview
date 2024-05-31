const express = require('express');
const path = require('path');
const app = express();
const port = 8081;
const cars = require('./cars.js');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());


app.get('/cars', (req, res) => {
  res.json(cars);
});

app.get('/', (req, res) => {
  res.json({ ok: true });
});

// TODO: Add a route that receives an id and returns the car with that id
app.get('/cars/:id', (req, res) => {
  // use ejs documentation https://ejs.co/#docs
  console.log('cars')
  console.log(cars.cars)
  console.log(req.params.id)
 res.json(cars.cars.find((car) => car.id == req.params.id));
});

// TODO: Add a route that receives a make and returns all cars with that make

app.get('/cars/list/:make', (req, res) => {
    // use ejs documentation https://ejs.co/#docs

    res.render('index', { cars: cars.cars.filter((car) => car.make === req.params.make) });
});

// Start the server
app.listen(port, () => {
  console.log('Server is running');
});