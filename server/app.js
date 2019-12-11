require('dotenv').config()

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const express = require('express')
const mongoose = require('mongoose')
const logger = require('morgan')
const path = require('path')
const passport = require('./config/passport')
const session = require('express-session')
const cors = require('cors');


mongoose
  .connect(process.env.DB, {useNewUrlParser: true, useUnifiedTopology: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

      
app.use(
  cors({
    credentials: true,
    origin: [
      'http://localhost:3000',
      'http://localhost:3001'
    ]
  })
)

app.use(
  session({
    secret: process.env.SECRET,
    resave:true,
    saveUninitialized: false,
    cookie: {httpOnly: false}
  })
)

app.use(passport.initialize())
app.use(passport.session())

//Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


const index = require('./routes/index');
const projectRoutes = require('./routes/project.Routes');
const investRoutes = require('./routes/investRoutes');
const studentRoutes = require('./routes/studentRoutes');
const investorRoutes = require('./routes/investorRoutes');

app.use('/',index);
app.use('/api', projectRoutes);
app.use('/api', investRoutes);
app.use('/api', studentRoutes);
app.use('/api', investorRoutes);

module.exports = app;
