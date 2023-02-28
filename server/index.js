require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { db } = require("./firebase");
const app = express();
const path = require("path");
const FieldValue = require("firebase-admin").firestore.FieldValue;
const __dirname1 = path.resolve();
const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: "*",
  })
);
app.get("/api/success", async (req, res) => {
  const { id } = req.query;

  const ck_doc = db.collection("checkouts").doc(id);
  ck_doc.update({
    payment: 200,
  });

  const ckRef = await ck_doc.get();

  const { items, uid } = ckRef.data();
  db.collection("users")
    .doc(uid)
    .update({
      library: FieldValue.arrayUnion(...items),
      basket: [],
    });
  res.redirect("/");
});

app.get("/api/cancel", async (req, res) => {
  const { id } = req.query;
  const ck_doc = db.collection("checkouts").doc(id);
  ck_doc.delete();
  res.redirect("/");
});

app.use(express.static(path.join(__dirname1 + "/client/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname1, "client", "dist", "index.html")),
    (err) => err && res.status(500).send(err);
});

app.listen(port, () => {
  console.log(`Server on ${port}`);
});
