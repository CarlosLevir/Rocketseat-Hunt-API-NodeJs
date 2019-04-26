const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}${process.env.DB_URL}:${
    process.env.DB_PORT
  }/nodeapi`,
  { useNewUrlParser: true },
);

app.use(routes);

app.listen(3001);
