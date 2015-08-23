var arpListener = require('arp-listener')
arpListener('en0', function(arpData) {

  if (arpData.sender_ha == 'a0:02:dc:5a:e9:d8') {
  	console.log('pushed');
	} 
	else if (arpData.sender_ha == 'ac:b3:13:8c:51:d7') {
		console.log('Sleepy Time');
	}
})