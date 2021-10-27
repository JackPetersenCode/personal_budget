const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const {addEnvelope, getEnvelopes} = require('./db');

router.use(bodyParser.json());

router.get('/', (req, res, next) =>{
    res.sendFile(__dirname + "/public/front.html");
})

router.get('/style.css', function(req, res) {
    res.sendFile(__dirname + "/public/style.css");
});

router.get('/script.js', function(req, res) {
    res.sendFile(__dirname + "/public/script.js");
});

router.get('/', function (req, res, next) {
    res.status(200).send('hello world');
});

router.get('/api/envelopes', function(req, res, next) {
    const envelopes = getEnvelopes();
    //console.log(envelopes);
    res.send(envelopes);
})

router.post('/api/envelope', function(req, res, next) {
    const body = req.body
    console.log(body);
    console.log(body.name, body.amount);
    const addedEnvelope = addEnvelope(body.name, body.amount);
    console.log(addedEnvelope);
    res.status(201).send(addedEnvelope);
})
module.exports = router;