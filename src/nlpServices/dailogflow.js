var apiai = require('apiai');
var DIALOGFLOW_CONFIG = require('../config/config')

module.exports={
    dialogflow:function(req,res){
        var app = apiai(DIALOGFLOW_CONFIG.GOOGLE_DIALOGFLOW_CLIENT_KEY);
    var request = app.textRequest(req.body.user_expressions, {
        sessionId: 'dialogflowChatSevice'
    }); 
    request.on('response', function(response) {
      //  console.log(response.result.fulfillment.speech);
       res.send({"botResponse":response.result.fulfillment.speech});
    });
    
    request.on('error', function(error) {
      res.send(error);
        console.log(error);
    }); 
    request.end();
    }
    
}