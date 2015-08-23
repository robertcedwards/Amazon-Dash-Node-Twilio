//
// Imports
//
var config = require('./config.json');
var arpListener = require('arp-listener')
//
// create an instance of the mixpanel client
var Mixpanel = require('mixpanel');
var mixpanel = Mixpanel.init('YOURMIXPANELAPI');
//
// Events
//
arpListener('en0', function(arpData) {

  if (arpData.sender_ha == 'YOURONPUSHMACADDRESS') {
    console.log('pushed');
    console.log(arpData.sender_ha);
    mixpanel.track(arpData.sender_ha);    
    }

    else if (arpData.sender_ha == 'YOURDEFAULTMACADDRESS') {
        console.log('Sleepy Time');
        console.log(arpData.sender_ha);
        mixpanel.track(arpData.sender_ha);    

    }
})