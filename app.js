console.log("web serverni boshlash");

const express = require("express");
const app = express();

// MongoDB chaqirish
const db = require("./server").db();
const mngodb = require("mongodb");

// 1 Kirish Code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2 Session Code
// 3 Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing code

app.post("/create-item", (req, res) => {
  console.log("user entered /create-item");
  const new_reja = req.body.reja;

  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    if (err) {
      console.log("Error inserting item:", err);
      res.status(500).json({ error: "Database error" });
    } else {
      console.log("Inserted ID:", data.insertedId);
      res.json({ _id: data.insertedId, reja: new_reja });
    }
  });
});

app.post("/delete-item", (req, res) => {
  const id = req.body.id;

  db.collection("plans").deleteOne({ _id: new mngodb.ObjectId(id) }, function (err, data) {
    if (err) {
      console.log("Error deleting item:", err);
      res.status(500).json({ error: "Database error" });
    } else {
      res.json({ state: "success" });
    }
  });
});

app.get("/", function (req, res) {
  console.log("user entered /");
  db.collection("plans").find().toArray((err, data) => {
    if (err) {
      console.log("Database error:", err);
      res.end("Something went wrong");
    } else {
      res.render("reja", { items: data });
    }
  });
});

module.exports = app;
