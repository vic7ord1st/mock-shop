const express = require('express');
const fs = require('fs');
const path = require('path');
const routes = require('./src/routes/index');
const dotenv = require('dotenv').config();
const morgan = require('morgan');

const port = process.env.PORT || 2000;
const app = express();

//production logging
if (process.env.NODE_ENV === 'production') {
    const accessLogStream = fs.createWriteStream(path.join(__dirname, '/src/logs/access.log'), { flags: 'a' })
    app.use(morgan('combined', { stream: accessLogStream }))
}

// view engine setup
app.set('views', path.join(__dirname, '/src/views'));
app.set('view engine', 'jade');

app.use(morgan('dev'));

app.get('/', (req, res, next) => {
    res.render('index', { title: 'Mock-shop' });
  });

app.use(express.static(path.join(__dirname, '/src/views/public')));
app.use(express.json())
app.use(express.Router())

app.use('/api/v1/', routes)

app.listen(port, () => {
    console.log('listening on', port)
})

