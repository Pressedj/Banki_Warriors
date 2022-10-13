const express = require("express");
const app = express();
const connectDB = require("./config/database");
const homeRoute = require("./routes/home");
const adminRoute = require("./routes/admin");
const userRoute = require("./routes/user");
const behavioralRoute = require("./routes/behavioral");
const technicalRoute = require("./routes/technical");
const adminBehavioralRoute = require("./routes/adminBehavioral");
const adminTechnicalRoute = require("./routes/adminTechnical");
const bodyParser= require('body-parser')

require("dotenv").config({ path: "./config/.env" });
//connectDB();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//app.use("/", homeRoute);
//app.use("/admin", adminRoute);
//app.use("/user", userRoute);
//app.use("/behavioral", behavioralRoute);
//app.use("/technical", technicalRoute);
//app.use("/admin/behavioral", adminBehavioralRoute);
//app.use("/admin/technical", adminTechnicalRoute);

//app.listen(process.env.PORT, () => {
//  console.log("Server is running, you better catch it!");
//});


app.listen(3000, function(){
    console.log('Welcome to the Banki Dojo')
})

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})

MongoClient.connect('mongodb+srv://bankiWarriors:<password>@cluster0.ktsdpma.mongodb.net/?retryWrites=true&w=majority', {useUnifiedTopology: true})
    .then(client => {
        console.log('Connected to Database')
        const db = client.db('bankiWarriors')
        app.use(bodyParser.urlencoded({ extended: true }))
        const quotesCollection = db.collection('quotes')
        console.log('I did it!')
        app.post('/questions', (req, res) => {
            console.log('HELOOOOOOOOOOOOOO')
            quotesCollection.insertOne(req.body)
                .then(result => {
                    //res.redirect('/')
                    console.log(result)
                })
            .catch(error => console.error(error))
            console.log(req.body)
        })
    })
    .catch(error => console.error(error))