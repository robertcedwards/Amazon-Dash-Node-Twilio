var arpListener = require('arp-listener')
arpListener('en0', function(arpData) {

  if (arpData.sender_ha == config.pushMAC) {
  	console.log('pushed');
	} 
	else if (arpData.sender_ha == config.defaultMAC) {
		console.log('Sleepy Time');
	}
})