const express = require("express");
const router = express.Router();
const nlm = require("../lib/nlmanager");

const requireAuth = (req, res, next) => {
  if (req.session.userId) {
      next(); // User is authenticated, continue to next middleware
  } else {
      res.redirect('/login'); // User is not authenticated, redirect to login page
  }

};

router.get("/", requireAuth, function (req, res) {
  res.render("namelist", { title: "Namelist" , user : req.session.userId});
});

router.post("/getData", requireAuth, async function (req, res) {
  const nl = await nlm.getData();
  res.send(nl);
});

router.post("/addProspect", requireAuth, function (req, res) {
  const { prospect } = req.body;
  nlm.addProspect(prospect);
  res.send(prospect.name + " added successfully!");
});

router.post("/removeProspect", requireAuth, function (req, res) {
  const { id } = req.body;
  nlm.removeProspect(id);
  res.send("Prospect removed successfully!");
});

router.post("/updateProspect", requireAuth, function (req, res) {
  const { id, fieldName, value, type } = req.body;
  nlm.updateProspect(id, fieldName, value, type);
  res.send(`${id} - ${fieldName} updated successfully!`);
});

router.post("/transferToKIV", requireAuth, function (req, res) {
  const { id } = req.body;
  nlm.transfer(id, "namelist", "kiv");
  res.send("Prospect transferred successfully!");
});

router.post("/transferToLL", requireAuth, function (req, res) {
  const { id } = req.body;
  nlm.transfer(id, "namelist", "ll");
  res.send("Prospect transferred successfully!");
});

module.exports = router;
