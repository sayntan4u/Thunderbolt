const express = require("express");
const router = express.Router();
const nlm = require("../lib/nlmanager");

const requireAuth = (req, res, next) => {
  // if (req.session.userId) {
  //     next(); // User is authenticated, continue to next middleware
  // } else {
  //     res.redirect('/login'); // User is not authenticated, redirect to login page
  // }
  next();
};

router.get("/", requireAuth, function (req, res) {
  res.render("namelist", { title: "Namelist" });
});

router.post("/getData", requireAuth, async function (req, res) {
  const nl = await nlm.getData();
  res.send(nl);
});

router.post("/addProspect", requireAuth, function (req, res) {
  const { prospect } = req.body;
  nlm.addProspect(prospect);
});

router.post("/removeProspect", requireAuth, function (req, res) {
  const { id } = req.body;
  nlm.removeProspect(id);
});

router.post("/updateProspect", requireAuth, function (req, res) {
  const { id, fieldName, value, type } = req.body;
  nlm.updateProspect(id, fieldName, value, type);
});

module.exports = router;
