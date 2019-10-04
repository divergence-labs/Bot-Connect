var express = require('express');
var router = express.Router();
var config = require('../src/config/config');
var apiai = require('apiai');
var multer  = require('multer')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'src/config/')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname +'.js')
  }
})
 
var upload = multer({ storage: storage })


//*****************************Integrating with google dialogflow NLP engine*************************
router.post('/speech', (req, res) => {
    var speech = req.body.speech;
    if(speech != null){
    var app = apiai(config.GOOGLE_DIALOGFLOW_CLIENT_KEY);
    var request = app.textRequest(speech, {
        sessionId: 'dialogflowChatSevice'
    }); 
    request.on('response', function(response) {
        console.log(response.result.fulfillment.speech);
         res.send({"botResponse":response.result.fulfillment.speech});
    });
    request.on('error', function(error) {
      res.send(error);
        console.log(error);
    }); 
    request.end();
    }
});
//*******************************************End of Service*******************************************

router.post('/upload/dialogflow/configfile', upload.single('config'), (req, res, next) => {
  const file = req.file
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)
  }
    res.send(file)
  
})

module.exports = router;
