const { application } = require("express");
const express = require("express");

const app = express();

app.get("/",(req, res) => {
    res.status(200).send("Welcome to my server");
});

app.post("/", (req, res) => {
    res.status(201).send("Your data has been saved");
});

app.put("/", (req, res) => {
    res.status(200).send("Your data has been replaced");
});

app.patch("/", (req, res) => {
    res.status(200).send("Your infor has been updated");
});

app.delete("/", (req, res) => {
    res.status(200).send("Your infor has been deleted");
});

app.listen(4002, (err) => {
    console.log("🚀 server listening on port http://localhost:4002");
});