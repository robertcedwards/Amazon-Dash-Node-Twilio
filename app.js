//
// Imports
//
var config = require('./config.json');
var arpListener = require('arp-listener')
//
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
    mixpanel.track(arpData.sender_ha);    
    }

    else if (arpData.sender_ha == config.defaultMAC) {
        console.log('Sleepy Time');
        console.log(arpData.sender_ha);
        mixpanel.track(arpData.sender_ha);    

    }
})