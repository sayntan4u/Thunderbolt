const admin = require("firebase-admin");
const credentials = require("../key.json");
const {Prospect} = require("./models/prospect");

// admin.initializeApp({
//   credential: admin.credential.cert(credentials),
// });

const db = admin.firestore();

class NLManager {
  constructor() {}

  async getData(collection = "namelist") {
    const snapshot = await db.collection(collection).listDocuments();

    const docArray = [];

    for (let i = 0; i < snapshot.length; i++) {
      const snap = await db.collection(collection).doc(snapshot[i].id).get();

      const p = new Prospect({
        id : snap.data().id,
        name : snap.data().name,
        week : snap.data().week,
        zone : snap.data().zone,
        city : snap.data().city,
        chatting : snap.data().chatting,
        socialMedia : snap.data().socialMedia,
        info : snap.data().info,
        infoWeek : snap.data().infoWeek,
        infoResponse : snap.data().infoResponse,
        reinfo : snap.data().reinfo,
        reinfoWeek : snap.data().reinfoWeek,
        reinfoResponse : snap.data().reinfoResponse,
        meetup : snap.data().meetup,
        invi : snap.data().invi,
        inviWeek : snap.data().inviWeek,
        inviResponse : snap.data().inviResponse,
        plan : snap.data().plan,
        planWeek : snap.data().planWeek,
        planStatus : snap.data().planStatus,
        remarks : snap.data().remarks
      });

      docArray.push(p);
    }

    // console.log(docArray);
    return docArray;
  }

  async addProspect(prospect, collection = "namelist"){
    await db.collection(collection).doc(prospect.id.toString()).set(prospect);
  }

  async removeProspect(id, collection = "namelist"){
    await db.collection(collection).doc(id.toString()).delete();
  }

  async updateProspect(id, fieldName, value, type="str", collection = "namelist"){
    if(type== "str"){
      var userJson = '{"' + fieldName + '" : "' + value +'"}';
    }else{
      var userJson = '{"' + fieldName + '" : ' + value + '}';
    }
    
    console.log(userJson);
    const obj = JSON.parse(userJson);
    await db.collection(collection).doc(id.toString()).update(obj);
  }
}

const nlm = new NLManager();

module.exports = nlm;

