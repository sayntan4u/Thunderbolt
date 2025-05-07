const express = require("express");
const router = express.Router();
const authm = require("../lib/authmanager");

const requireAuth = (req, res, next) => {
  if (req.session.userId) {
    next(); // User is authenticated, continue to next middleware
  } else {
    res.redirect("/login"); // User is not authenticated, redirect to login page
  }
};

router.get("/", function (req, res) {
  if (req.session.userId) {
    res.redirect("/dashboard");
  } else {
    res.render("login");
  }
});

router.post("/", async function (req, res) {
  authm.login(req, res);
});

router.get("/createAccount", function (req, res) {
  res.render("signup");
});

router.post("/createAccount", function (req, res) {
  const { name, email, phone } = req.body;

  authm.signup(name, email, phone);
});

router.get("/forgot", function (req, res) {
  res.render("forgot");
});

router.get("/logout", requireAuth, function (req, res) {
  req.session.destroy(function (err) {
    res.redirect("/");
  });
});

module.exports = router;
