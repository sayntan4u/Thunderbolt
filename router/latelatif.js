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
  res.render("latelatif", { title: "Late Latif" });
});

router.post("/getData", requireAuth, async function (req, res) {
  const nl = await nlm.getData("ll");
  res.send(nl);
});

router.post("/addProspect", requireAuth, function (req, res) {
  const { prospect } = req.body;
  nlm.addProspect(prospect, "ll");
  res.send(prospect.name + " added successfully!");
});

router.post("/removeProspect", requireAuth, function (req, res) {
  const { id } = req.body;
  nlm.removeProspect(id, "ll");
  res.send("Prospect removed successfully!");
});

router.post("/updateProspect", requireAuth, function (req, res) {
  const { id, fieldName, value, type } = req.body;
  nlm.updateProspect(id, fieldName, value, type, "ll");
  res.send(`${id} - ${fieldName} updated successfully!`);
});

router.post("/transferToKIV", requireAuth, function (req, res) {
  const { id } = req.body;
  nlm.transfer(id, "ll", "kiv");
  res.send("Prospect transferred successfully!");
});

router.post("/transferToNamelist", requireAuth, function (req, res) {
  const { id } = req.body;
  nlm.transfer(id, "ll", "namelist");
  res.send("Prospect transferred successfully!");
});

module.exports = router;
