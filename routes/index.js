var express = require('express');
var router = express.Router();
var luis = require('../src/nlpServices/luis')
var dialogflow = require('../src/nlpServices/dailogflow')


//*****************************Integrating with google dialogflow NLP engine*************************
router.post('/user/expressions/dialogflow', dialogflow.dialogflow);
//*******************************************End of Service*******************************************

//*****************************Integrating with Microsoft LUIS NLP engine*************************
router.post('/utterances/luis',luis.luisIntent);
//*******************************************End of Service*******************************************

module.exports = router;
