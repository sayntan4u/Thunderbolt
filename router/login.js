const express = require('express');
const router = express.Router();

const requireAuth = (req, res, next) => {
    if (req.session.userId) {
        next(); // User is authenticated, continue to next middleware
    } else {
        res.redirect('/login'); // User is not authenticated, redirect to login page
    }
}

router.get('/', function (req, res) {
    if (req.session.userId) {
        res.redirect("/dashboard");
    } else {
        res.render('login');
    }

});

router.post('/', function (req, res) {
    // console.log(req.body.email);
    // console.log(req.body.password);
    if (req.body.email == "Admin@abc.com" && req.body.password == "123") {
        req.session.userId = req.body.email; // Set session identifier
        res.redirect('/dashboard');
        // res.send({title : "Sayantan"});
    } else {
        res.render('login');
    }

});


router.get('/logout', requireAuth, function (req, res) {
    req.session.destroy(function (err) {
        res.redirect('/');
    });
});


module.exports = router;