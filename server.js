const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://alexxoneee:2C8Ko7wk84DgKzFU@cluster0.lf7ty.mongodb.net/Reja?retryWrites=true&w=majority";

mongodb.connect(
    connectionString,
    {
        useNewUrlParser: true,
        useUnifiedtopology:true,
    },
    (err,client) => {
        if(err) console.log("ERROR on connection MONGODB");
        else{
            console.log("MONGODB connection succeed");
            module.exports = client;
            const app = require("./app");
            const server = http.createServer(app);
            let PORT =5009;
            server.listen(PORT,function () {
                console.log(`The server is running successfully on port:${PORT}, http://localhost:${PORT} `);
            });
        }
    }
) ;