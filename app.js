const express = require('express');
const session = require('express-session');
const path = require('path');


const app = express();
const port = process.env.PORT || 8000;



app.set('view engine', 'ejs');
app.use(session({
  secret: 'Sapphire2025',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const requireAuth = (req, res, next) => {
  if (req.session.userId) {
    next(); // User is authenticated, continue to next middleware
  } else {
    res.redirect('/login'); // User is not authenticated, redirect to login page
  }
}


// Routes will go here
app.get('/', requireAuth, function (req, res) {
    // res.render('dashboard', {userName : req.session.userId, page : 'dash'});
    res.redirect("/login");
  });


//Login page
const loginRoute = require('./router/login');
app.use('/login', loginRoute);

//Dashboard page
const dashboardRoute = require('./router/dashboard');
app.use('/dashboard', dashboardRoute);

//Activities page
const activitiesRoute = require('./router/activities');
app.use('/activities', activitiesRoute);

//Namelist page
const namelistRoute = require('./router/namelist');   
app.use('/namelist', namelistRoute);

//Profile page
const profileRoute = require('./router/profile');
app.use('/profile', profileRoute);

//Settings page
const settingsRoute = require('./router/settings');
app.use('/settings', settingsRoute);


app.listen(port, '0.0.0.0');
console.log('Server started at http://localhost:' + port);