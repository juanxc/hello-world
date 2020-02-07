const functions = require('firebase-functions');
var express = require('express');

const app = express();
const fs = require('fs');

app.get('/:login', (req, res) => {
    switch(req.params.login.toLowerCase()){
        case "jnxcastro":
            res.send({
                id: 1234,
                name: "Juan Castro",
                login: "jnxcastro@gmail.com"
            })
            break;
        case "jn90pp":
            res.send({
                id:2000,
                name: "Ailec NMN",
                login: "jn90pp@gmail.com"
            })
            break;
        default:
            res.status(404).send({message: "User not found"})
    }
});

const app1 = express();
const dataProducts = require("./data/database.json");
const cors = require('cors')({origin: true});
const bodyParser = require("body-parser");
app1.use(cors)
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: false}));

app1.get('/',(req, res)=>{
    res.json(dataProducts);
})

exports.users = functions.https.onRequest(app);

exports.products = functions.https.onRequest(app1);

