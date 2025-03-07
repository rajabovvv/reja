console.log("Web serverni boshlash...");

const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");

const app = express();
const PORT = 3000; // Change if needed

// ✅ MongoDB Connection
const dbUrl = "mongodb://localhost:27017"; // Change if using a remote DB
const dbName = "rejaDB";
let db;

// Connect to MongoDB and start server **ONLY AFTER connection is established**
MongoClient.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((client) => {
        console.log("MongoDB ga ulanish hosil qilindi!");
        db = client.db(dbName);

        // ✅ Start the server **after** successful DB connection
        app.listen(PORT, () => {
            console.log(`Server ${PORT} portda ishlamoqda...`);
        });
    })
    .catch((err) => {
        console.error("MongoDB ulanish xatosi:", err);
        process.exit(1); // Exit the process if DB connection fails
    });

// ✅ Middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Routes

// Create Item
app.post("/create-item", (req, res) => {
    if (!db) return res.status(500).json({ error: "Database not connected" });

    db.collection("plans").insertOne({ reja: req.body.reja })
        .then((result) => {
            res.json({ _id: result.insertedId, reja: req.body.reja });
        })
        .catch((err) => {
            console.error("Error inserting item:", err);
            res.status(500).json({ error: "Database error" });
        });
});

// Delete Item
app.post("/delete-item", (req, res) => {
    if (!db) return res.status(500).json({ error: "Database not connected" });

    db.collection("plans").deleteOne({ _id: new ObjectId(req.body.id) })
        .then(() => res.json({ state: "success" }))
        .catch((err) => {
            console.error("Error deleting item:", err);
            res.status(500).json({ error: "Database error" });
        });
});

// Edit Item
app.post("/edit-item", (req, res) => {
    if (!db) return res.status(500).json({ error: "Database not connected" });

    db.collection("plans").findOneAndUpdate(
        { _id: new ObjectId(req.body.id) },
        { $set: { reja: req.body.new_input } }
    )
        .then(() => res.json({ state: "success" }))
        .catch((err) => {
            console.error("Error updating item:", err);
            res.status(500).json({ error: "Database error" });
        });
});

// Load Items on Page Load
app.get("/", (req, res) => {
    if (!db) return res.status(500).json({ error: "Database not connected" });

    db.collection("plans").find().toArray()
        .then((data) => res.json(data))
        .catch((err) => {
            console.error("Database error:", err);
            res.status(500).json({ error: "Database error" });
        });
});