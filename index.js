const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// var user = require('./users.js')
const routes = require('./routes');

const app = express();
const port = (process.env.PORT || 3333);

app.use(express.static('public'))
app.use(bodyParser.json())

// cors
app.use(cors({
    origin: ['http://localhost:4200', 'http://127.0.0.1:4200'],
    credentials: true,
}));

app.listen(port, () => console.log(`Listening on port ${port}`) ) 

//others call ex: routes and others
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes)

