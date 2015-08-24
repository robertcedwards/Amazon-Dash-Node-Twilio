var config = require('./config.json');
var arpListener = require('arp-listener');
var request = require('request');

arpListener('en0', function(arpData) {

  if (arpData.sender_ha == config.pushMAC) {
  	console.log('pushed');
  	request.post({
      url: 'http://maker.ifttt.com/trigger/glad.dash_button/with/key/' + config.iftttkeys 
    }, function(error, response, body) {
      console.log(body);
      console.log('Error was ', error);
    });

  } 
	else if (arpData.sender_ha == config.defaultMAC) {
		console.log('Sleepy Time');
	}
})

