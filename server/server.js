const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./routes/api');

mongoose.connect(
  process.env.MONGODB_URI ||
    'mongodb+srv://joshxfi:Test08qq@xfidb.jdq15.mongodb.net/projectSKL?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected!');
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', routes);
app.use(morgan('tiny'));

if (process.env.NODE_ENV == 'production') {
  app.use(express.static('client/build'));
}

app.listen(PORT);
