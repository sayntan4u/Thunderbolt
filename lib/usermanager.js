const admin = require("firebase-admin");

const db = admin.firestore();

class UserManager {
  constructor() {}

  async getAvatarID(uid) {
    const snap = await db.collection("users").doc(uid.toString()).get();
    return snap.data().avatarId;
  }

  async setAvatarID(uid, avID) {
    await db.collection("users").doc(uid.toString()).update({avatarId : avID});
  }
}

const userm = new UserManager();

module.exports = userm;
