const express = require("express");
const router = express.Router();
const userm = require("../lib/usermanager");
const authm = require("../lib/authmanager");

const requireAuth = (req, res, next) => {
  if (req.session.userId) {
    next(); // User is authenticated, continue to next middleware
  } else {
    res.redirect("/login"); // User is not authenticated, redirect to login page
  }
};

router.post("/getAvatarId", requireAuth, async function (req, res) {
  const { uid } = req.body;
  const avID = await userm.getAvatarID(uid);
  res.send(avID);
});

router.post("/setAvatarId", requireAuth, async function (req, res) {
  const { uid, avID } = req.body;
  await userm.setAvatarID(uid, avID);
  res.send("success");
});

router.post("/updateUser", requireAuth, async function (req, res) {
  const ret = await authm.updateUser(req);
  if (ret == 0) {
    res.send("success");
  } else {
    res.send("error");
  }
});

module.exports = router;
