const express = require("express")
const port = 3001;
const path = require("path");
const fs = require("fs");
const cookies = require("cookie-parser");
const db = require("./config/db")

const app = express();
const passport = require("./middleware/passport");
const session = require("express-session");

app.set("view engine","ejs");
app.use(express.urlencoded());
app.use("/",require("./routes/route"))
app.use(cookies());

app.use(
    session({
        name:"local",
        secret:"local",
        resave:true,
        saveUninitialized:false,
        cookie:{maxAge:100*100*60,httpOnly:true},
    })
);

app.use(passport.initalize());
app.use(passport.session());

app.use("/public",express.static(path.join(__dirname,"public")))
app.use("/uploads",express.static(path.join(__dirname,"uploads")))


app.listen(port,(err)=>{
    err ? console.log(err) : console.log("server started at :- " + port);    
})
