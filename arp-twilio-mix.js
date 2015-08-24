//
// Imports
//
var config = require('./config.json');
var twilio = require('twilio');
var media = "PUT A URL TO AN IMAGE HERE"
var arpListener = require('arp-listener')

//
// Twilio Config
//
var twilioClient = require('twilio')(config.twilioAccountSID, config.twilioAuthToken);

// create an instance of the mixpanel client
var Mixpanel = require('mixpanel');
var mixpanel = Mixpanel.init(config.mixpanel);
//
// Events
//

arpListener('en0', function(arpData) {

  if (arpData.sender_ha == config.pushMAC) {
    console.log('pushed');
    console.log(arpData.sender_ha);
    sendTextMessage('Dash Button Pushed',media);
    mixpanel.track(arpData.sender_ha);    


    } 
    else if (arpData.sender_ha == config.defaultMAC) {
        console.log('Sleepy Time');
    }
})

function sendTextMessage(message,media) {
    twilioClient.sendMessage({
        to: config.smsToPhoneNumber,
        from: config.smsFromPhoneNumber,
        body: message,
        mediaUrl: media
    }, function(err, responseData) {
        if (err) {
            console.error(err);
        } else {
            console.log(message + "sent to " + config.smsToPhoneNumber);
        }
    });
}