const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const PORT = 2121;
require("dotenv").config();

const homeRoute = require("./routes/home");
let db,
  dbConnectionStr = process.env.DB_STRING,
  dbName = "bankiWarriors";

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true }).then(
  (client) => {
    console.log(`Connected to ${dbName} Database`);
    db = client.db(dbName);
    // const cardsCollection = db.collection("cards");
  }
);

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
