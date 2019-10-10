require('dotenv').config();
var request = require('request');
var querystring = require('querystring');
var LUIS_CONFIG = require('../config/config')

module.exports = {
    luisIntent:function(req,res){
    var endpoint = LUIS_CONFIG.MICROSOFT_LUIS_ENDPOINT;
    var luisAppId = LUIS_CONFIG.MICROSOFT_LUIS_APPID;
    var endpointKey = LUIS_CONFIG.MICROSOFT_LUIS_PRIMARY_KEY;
    // Create query string 
        var queryParams = {
            "verbose":  true,
            "q": req.body.utterances,
            "subscription-key": endpointKey
        }

    // append query string to endpoint URL
        var luisRequest =
            endpoint + luisAppId +
            '?' + querystring.stringify(queryParams);

    // HTTP Request
        request(luisRequest,
        function optionalCallback(err, httpResponse, body) {
            if (err) {
                console.error('upload failed:', err);
                res.send(err);
            }
           // console.log('Upload successful!  Server responded with:', body);
            res.send(JSON.parse(body));
        });
    }
}