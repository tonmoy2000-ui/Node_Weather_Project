const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = 8000;

// Paths
const staticPath = path.join(__dirname, "../public");
const templatesPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Middleware
app.use(express.static(staticPath));

// Setting view engine
app.set("view engine", "hbs");
app.set("views", templatesPath);
hbs.registerPartials(partialsPath);

// Routes
app.get('/', (req, res) => {
    res.render('index');
});
app.get('/about', (req, res) => {  
    res.render('about');
});
app.get('/weather', (req, res) => {
    res.render('weather');
});
app.get('*', (req, res) => {
    res.render('404error',{
        errormsg: "Opps! Page Not Found"
    });
});

// Listening to port
app.listen(port, () => {
    console.log(`Server running on port ${port}!`);
});
