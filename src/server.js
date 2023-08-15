const express = require('express');
const app = express();
require('dotenv').config();
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 5000;
const path = require('path');
const route = require('../routes/route');
const hbs = require('hbs');
const template = path.join(__dirname, "../templates/views");
const partials = path.join(__dirname, "../templates/partials");
app.set('views', template)
app.set('view engine', 'hbs')
 
hbs.registerPartials(partials);
app.use(express.static(path.join(__dirname,'../public')))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(route);



app.all('*', (req, res) => {
    res.render('error')
})
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})