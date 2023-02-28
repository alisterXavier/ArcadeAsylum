var serviceAccount = require("./serviceAccountKey");
var admin = require("firebase-admin");


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = { admin: admin, db: db };
