const admin = require("firebase-admin");
const credentials = require("../key.json");
const { Prospect } = require("./models/prospect");

// admin.initializeApp({
//   credential: admin.credential.cert(credentials),
// });

const db = admin.firestore();

class NLManager {
  constructor() {}

  async getData(uid, collection = "namelist") {
    const snapshot = await db.collection("users").doc(uid).collection(collection).listDocuments();

    const docArray = [];

    for (let i = 0; i < snapshot.length; i++) {
      const snap = await db
      .collection("users")
        .doc(uid)
        .collection(collection)
        .doc(snapshot[i].id)
        .get();

      const p = new Prospect({
        id: snap.data().id,
        name: snap.data().name,
        week: snap.data().week,
        zone: snap.data().zone,
        city: snap.data().city,
        chatting: snap.data().chatting,
        socialMedia: snap.data().socialMedia,
        info: snap.data().info,
        infoWeek: snap.data().infoWeek,
        infoResponse: snap.data().infoResponse,
        reinfo: snap.data().reinfo,
        reinfoWeek: snap.data().reinfoWeek,
        reinfoResponse: snap.data().reinfoResponse,
        meetup: snap.data().meetup,
        invi: snap.data().invi,
        inviWeek: snap.data().inviWeek,
        inviResponse: snap.data().inviResponse,
        plan: snap.data().plan,
        planWeek: snap.data().planWeek,
        planStatus: snap.data().planStatus,
        remarks: snap.data().remarks,
      });

      docArray.push(p);
    }

    // console.log(docArray);
    return docArray;
  }

  async getSingleProspectData(uid, id, collection = "namelist") {
    const snap = await db
    .collection("users")
      .doc(uid)
      .collection(collection)
      .doc(id.toString())
      .get();
    return snap.data();
  }

  async addProspect(uid, prospect, collection = "namelist") {
    await db
    .collection("users")
      .doc(uid)
      .collection(collection)
      .doc(prospect.id.toString())
      .set(prospect);
  }

  async removeProspect(uid, id, collection = "namelist") {
    await db.collection("users").doc(uid).collection(collection).doc(id.toString()).delete();
  }

  async updateProspect(
    uid,
    id,
    fieldName,
    value,
    type = "str",
    collection = "namelist"
  ) {
    if (type == "str") {
      var userJson = '{"' + fieldName + '" : "' + value + '"}';
    } else {
      var userJson = '{"' + fieldName + '" : ' + value + "}";
    }

    // console.log(userJson);
    const obj = JSON.parse(userJson);
    await db.collection("users").doc(uid).collection(collection).doc(id.toString()).update(obj);
  }

  async transfer(uid, id, fromCollection, toCollection) {
    //get data
    const data = await this.getSingleProspectData(uid, id, fromCollection);
    console.log(data);
    //add data in toCollection
    await db.collection("users").doc(uid).collection(toCollection).doc(id.toString()).set(data);
    //delete data in fromCollection
    await db.collection("users").doc(uid).collection(fromCollection).doc(id.toString()).delete();
  }
}

const nlm = new NLManager();

module.exports = nlm;
