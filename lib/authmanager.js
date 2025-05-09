const admin = require("firebase-admin");
const credentials = require("../key.json");

admin.initializeApp({
  credential: admin.credential.cert({
  "type": "service_account",
  "project_id": "thunderbolt-a38de",
  "private_key_id": "09da5bc65eb41a8e20725aeca9598c9bcf2e653d",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDSgKQbRdXBst1J\npjs02CiPubwLvJEj1OFOk9rYo6FRWpivlQ3L1FjqeIaP8CuZ/UjeFICZgqFhYbSu\nL/kE2najC0cA8Hsr9U1kDZ8m8XOmArnowpWDb/NFi6k+yiS+BMRdtuP1Es6ShZed\nJpjlbUiL0jqlA1Zw8HSTN7lC67xt9838y+kgPc6RsN9GnwUjqqHQQLmpQH7CQWUp\nw3SpzjUpf+eRCefD4jvjuqXaXryFI3SS9ON5OWTb+hDbkF4MY9OcC64QlryCfWZq\noKuDWR6JZbW2jxj23FPqy+8AlWvL1txMIUJyAOsS0iDIg2N+VE5d6Zhfc+J923fb\nqZ1VYtz3AgMBAAECggEACHKiMCs1NDDsVL+hLtjUukpInV33CZP9al/6D4MNmJke\nrIxtgWmA6Gc0dN1W52pBsBJTKnxfSdJ+fXxH+mWVqKugsPOo6Pw1gjDrwXsKJzaC\n/uM91dVt0wCTJuwJqnInIUdGm1GJM1pW82pKBr13UY+UmLlRqqmm7zhaxn1CBbwY\n1VHj7HW5wVdM8fmgEgR+AV2KMCSqjS237V7uBmXcu4nGzqEL4R8WEG6H9EynQEEb\nyXszCbnviTxQSFAr5AwAqhn6WzxJk4hqMopgWAzknIKVJJ8288fTR+2XiXOSp36t\nU+8GsyPNCft6C1COoH+rDc3NFFu5WqQNJWh0JgHMgQKBgQDrVSqD+P1cIBVryUIr\nH/jQeNj05a3jJfydavoZ8UiVSllAI3AO62+ji842zM9MgGHqRc9eqAVmIWozLGBd\nMSGOESp8crZkb6anD73w6Or7f4haPm2ICvTnAAIh6i2VqHnzghVFBxfapGYsz9qt\n6XLdeNv+4r7g+0H1X1swkFFCdwKBgQDk/Tvo5BYEcvbofQZgAs2B2jCJI2wwu4kW\n1Kvrt7SiWoqSyukYnNLhRkv1nX+EuI5+b+9wEprXsMtiZcg8A8UtDX0tQTqZ8p83\nD8PqDSK0yYbrPe3YTqb5YqiaiZIyK9Z1bVcKnBpxsxR+xX1zIC/AWg3GwHEiGepn\n5c603pNZgQKBgDNd7p7J3XubYTGax3+kReozRqAF9jOrmf0+WYMKIJ69kMeoNJB9\nIWwgWw2pHOKE71p0jHQL1snZJ1YuLIaK79kTtCNf4qH/oO+8Ruhr3sawqrGQCNZ2\nFcjKPqzqcbLGCIB3d28Owk0uL0M+x2vIlhLzi4mSMrnm/hmyC7SI+8O3AoGBAN2U\n8jkNJQUPHj+gY9/aNnSV5ut9XH7XqfNuviHtdRy5kmgzc1W+wwz8khpNWozabgCJ\nXl/LkQxwZo6DwTvZxh4vdFarTQKVVV3ZopHEPjZE4IqYNaRfj5G410AbKV3lL7QX\npud8YNZvHMEDZ75UggCW48fUhmUiQMJjDR/WVS2BAoGBANvj6t4256U2L7+R3Bxu\nEJbJGXcChZfihVgCtVePzZScn4FRIAE/JzvBfMYgp7PeB0kBn5TUU+EO1FFKYbeZ\n1erIxS4Wm4Wx8dAA8Z6pISDnHPM8uQiXqaGltPn+LifHwfBeowAb6F3/iRAOCMHW\n1yqmXBMUO2tINxJybFXm5SNx\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-fbsvc@thunderbolt-a38de.iam.gserviceaccount.com",
  "client_id": "111041370953765266978",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40thunderbolt-a38de.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}),
});

const firebase = require("firebase/app");
const {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} = require("firebase/auth");

const firebaseConfig = {
  apiKey: "AIzaSyB3U0xwXJPetBwIRsk3r0NCIqfb6iH6l24",
  authDomain: "thunderbolt-a38de.firebaseapp.com",
  projectId: "thunderbolt-a38de",
  storageBucket: "thunderbolt-a38de.firebasestorage.app",
  messagingSenderId: "501094038565",
  appId: "1:501094038565:web:fe6c37a225907d8409d3cc",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = getAuth();

const db = admin.firestore();

class AuthManager {
  constructor() {}

  login(req, res) {
    const { email, password } = req.body;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        req.session.userId = user; // Set session identifier
        res.redirect("/dashboard");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        res.render("login");
      });
  }

  signup(req, res) {
    const { name, email, phone } = req.body;
    admin
      .auth()
      .createUser({
        email: email,
        emailVerified: false,
        phoneNumber: "+91" + phone.toString(),
        password: "MAXOUT",
        displayName: name,
        disabled: false,
      })
      .then((userRecord) => {
        // See the UserRecord reference doc for the contents of userRecord.
        // console.log(userRecord);
        db.collection("users")
          .doc(userRecord.uid.toString())
          .set({ avatarId: 1 });
        req.session.userId = userRecord;
        res.redirect("/dashboard");
      })
      .catch((error) => {
        console.log("Error creating new user:", error);
        res.render("login");
      });
  }

  async isCorrectPass(req) {
    const { pass } = req.body;
    const email = req.session.userId.email;

    var result = false;

    await signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        result = true;
      })
      .catch((error) => {
        result = false;
      });
    return result;
  }

  async updateUser(req) {
    const { name, phone } = req.body;
    const uid = req.session.userId.uid;

    var retCode = "";
    await admin
      .auth()
      .updateUser(uid, {
        phoneNumber: phone.toString(),
        displayName: name,
      })
      .then((userRecord) => {
        // See the UserRecord reference doc for the contents of userRecord.
        // console.log("Successfully updated user", userRecord.toJSON());
        req.session.userId = userRecord;
        req.session.save();

        retCode = "success";
        console.log();
      })
      .catch((error) => {
        console.log("Error updating user:", error);
        retCode = error;
      });

    return retCode;
  }

  async changePass(req) {
    const { pass } = req.body;
    const uid = req.session.userId.uid;

    var retCode = "";
    await admin
      .auth()
      .updateUser(uid, {
        password: pass,
      })
      .then((userRecord) => {
        // See the UserRecord reference doc for the contents of userRecord.
        // console.log("Successfully updated user", userRecord.toJSON());
        req.session.userId = userRecord;
        req.session.save();

        retCode = "success";
        console.log();
      })
      .catch((error) => {
        console.log("Error updating user:", error);
        retCode = error;
      });

    return retCode;
  }

  deleteUser(req) {}
}

const authMNGR = new AuthManager();

module.exports = authMNGR;
