const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
app.use(express.json());
app.use(cors());

const PORT = 8000;

const servicesCardRoute = require('./routes/servicesCard');
const about = require('./routes/about');
const aboutUnique = require('./routes/aboutUnique');
const aboutUniqueList = require('./routes/aboutUniqueList');
const aboutTeam = require('./routes/aboutTeam');
const topServicesRoute = require('./routes/topServices');
const virtualService = require('./routes/whyChooseVirtualExports');
const placeAnOrder = require('./routes/placeAnOrder');

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(console.log('Connecting to mongoDB'))
  .catch((err) => console.log(err));

app.use('/servicesCard', servicesCardRoute);
app.use('/about', about);
app.use('/aboutUnique', aboutUnique);
app.use('/aboutUniqueList', aboutUniqueList);
app.use('/aboutTeam', aboutTeam);
app.use('/placeAnOrder', placeAnOrder);
app.use('/topServices', topServicesRoute);
app.use('/virtualService', virtualService);

app.get('/', (req, res) => {
  res.send('Hello Buddy!!!');
});

app.listen(process.env.PORT || PORT);
