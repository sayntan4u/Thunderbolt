const admin = require("firebase-admin");
const credentials = require("../key.json");

admin.initializeApp({
  credential: admin.credential.cert(credentials),
});

const firebase = require("firebase/app");
const {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
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

  signup(name, email, phone) {
    admin
      .auth()
      .createUser({
        email: email,
        emailVerified: false,
        phoneNumber: "+91" + phone.toString(),
        password: "12345678",
        displayName: name,
        disabled: false,
      })
      .then((userRecord) => {
        // See the UserRecord reference doc for the contents of userRecord.
        console.log("Successfully created new user:", userRecord.uid);
      })
      .catch((error) => {
        console.log("Error creating new user:", error);
      });
  }
}

const authMNGR = new AuthManager();

module.exports = authMNGR;
