console.log("web serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");

//1 Kirish Code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2 Session Code
//3 Views code
app.set("views", "views");
app.set("view engine", "ejs");

//4 Routing code

app.post("/create-item", (req, res) => {
  console.log(req.body);
  res.json({ test: "success" });
});

app.get("/", function (req, res) {
  res.render("harid");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function (req, res) {
  console.log("server is running succesfully");
});
