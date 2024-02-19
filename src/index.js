const express = require('express');
const path = require('path');
const collection = require("./config");
const exp = require('constants');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("login");
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.post("/register", async (req, res) => {
    const data = {
        username: req.body.username,    
        password: req.body.password
    }
                                                                                                                                     
    const userExists = await collection.findOne({username: data.username});
    if(userExists){
        res.send('User with such username already exists, try again');
    }else{
        const userdata = await collection.insertMany(data);
        console.log(userdata);
        res.render("login");
    }
});

app.post("/login", async (req, res) => {
    try{
        const userExists = await collection.findOne({username: req.body.username});
        if(!userExists){
            res.send("There is no such user, try again.")
        }
        const passwordIsCorrect = userExists.password.localeCompare(req.body.password);
        if(!passwordIsCorrect){
            res.send('You have successfully logged in!');
        }else{
            res.send('Password wrong, try again.');
        }
    }catch{
        res.render("login")
    }
});


const port = 3000;
app.listen(port, () => {
    console.log('Server is running on port: ' + port);
});
