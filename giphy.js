//
// Imports
//
var giphy = require('giphy-wrapper')('dc6zaTOxFJmzC');//PUBLIC API KEY
var config = require('./config.json');
var arpListener = require('arp-listener');
var twilio = require('twilio');
//
// Twilio Config
//
var twilioClient = require('twilio')(config.twilioAccountSID, config.twilioAuthToken);
var Mixpanel = require('mixpanel');

// create an instance of the mixpanel client
var mixpanel = Mixpanel.init('YOURMIXPANELID');
//
// Events
//

arpListener('en0', function(arpData) {

  if (arpData.sender_ha == config.pushMAC) {
    console.log('pushed');
    console.log(arpData.sender_ha);
    sendGif();
    mixpanel.track(arpData.sender_ha);    
    }

    else if (arpData.sender_ha == config.defaultMAC) {
        console.log('Sleepy Time');
        console.log(arpData.sender_ha);
        mixpanel.track(arpData.sender_ha);    

    }
})


    
 function sendGif(){
    giphy.search('puppy', 100, 0, function (err, data) {
    if (err) {
      console.log(err);
      return;
    }
 
    var gifs = data.data;
    var gif = gifs[Math.floor(Math.random()*gifs.length)];
      twilioClient.sendMessage( 
        { 
          to: config.smsToPhoneNumber,
          from: config.smsFromPhoneNumber, 
          body:'PUPPY!!!!', 
          mediaUrl: gif.images.downsized.url
        }, function( err, data ) {
           console.log( data.body );
        }
      );
  });
}
