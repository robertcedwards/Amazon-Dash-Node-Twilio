# Amazon-Dash-Node-Twilio
Hacking Amazon Dash with ARP, Node, and Twilio…and then Giphy, IFTTT, and Mixpanel

1) Install the dependencies you'll need to use the individual packages or install them all using 
```npm install```

2) Get API keys for the services that you'll be using (Twilio, Mixpanel, Giphy, IFTTT).

3) Enter those API keys into the config.json file included in the repo.

4) Run the script you'd like using $``` node debug-example.js``` to get your MAC Addresses of the On/Off state of your Dash buttons. Then plug those into the config.js file and run your choosing of the scripts in the directory such as IFTTT.js, etc.


<hr/>
This is inspired by the great hack using Python and Magicforms that was posted on Medium here:
https://medium.com/@edwardbenson/how-i-hacked-amazon-s-5-wifi-button-to-track-baby-data-794214b0bdd8

Also found here on a Gist on Github: https://gist.github.com/eob/79f481c68cf4fbb110e7


<hr/>
Added a IFTTT example:
https://ifttt.com/recipes/318591-amazon-dash-to-maker

Along with Twilio, Mixpanel, Giphy, and a debug console example.

Get your Dash Buttons here:
<http://amzn.to/1KINQQc>

![Amazon Dash buttons](http://ecx.images-amazon.com/images/I/61up4U2txRL._SX522_.jpg)
