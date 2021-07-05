
// Import Files and Libraries
//const port = 3000;
const myJson=require('./vanresjson.json')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// define location of static files
const Images=['/static/img/graph.png','/static/img/people.jpg','/static/img/product.jpg'];
const Pages=['index','courses','contact','thanks'];

app.use(bodyParser.urlencoded({ extended: false})); //add middleware
app.use('/static', express.static('public'));
app.set('view engine', 'pug');

// set the get and post routes and request and response
//index.pug
app.get('/', (req, res) => {  
    res.render('index',{Pages});
});

app.get('/index', (req, res) => {
    res.render('index',{Pages});
});

app.get("/contact", (req, res) => {
    res.render('contact',{Pages});
});
app.post('/contact', (req, res) => {
    email = String(req.body.email);
    console.log(email)
    res.render('thanks', {email,Pages});   
});

app.get("/courses", (req, res) => {
    res.render('courses',{Pages,myJson});
});

app.get('/thanks', (req, res) => {
// let veg = req.params.vegetable; ignore this
res.render('thanks',{email,Pages});
});

//handle error
app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
   });

// set up the server, log the start
app.listen(3000, () => {
    console.log('Server running on port: 3000');
    });
