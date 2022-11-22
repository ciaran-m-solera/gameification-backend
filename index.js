const mongoose = require("mongoose");
const express = require("express");

const app = express();

const port = 4000;

const mongouri = "mongodb+srv://gamificationadmin:admin123@cluster0.9adtvc9.mongodb.net/gamification?retryWrites=true&w=majority";

const connection = mongoose.connect(mongouri);

const cors = require("cors");

app.use(cors());
const Team = mongoose.model("Team", {
    teamName: String,
    teamScore: String,
    teamId: String
});


app.get("/teams", async (req, res) => {
    const allTeams = await Team.find();
    res.send(allTeams);
});
app.get("/", (req, res) => {
    res.send("hello")
});



app.listen(port, () => {
    console.log("Server is running on port: " + port);

})
