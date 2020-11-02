'use strict';
const Alexa = require('alexa-sdk');
exports.handler
= function(event, context, callback)
{
var alexa = Alexa.handler(event, context);
alexa.APP_ID = 'amzn1.ask.skill.cbae7344-61de-4d2b-bb26-be062ace04c5!'
alexa.registerHandlers(handlers);
alexa.execute();
};

var handlers = {
'LaunchRequest': function () {
this.emit('Gaston');
},
'Gaston': function (fact) {
var say = 'Here is your answe. '
+ Gaston(fact);
this.response.speak(say);
this.emit(':responseReady');
},
'AMAZON.CancelIntent': function () {
this.response.speak('Goodbye');
this.emit(':responseReady');
},

'AMAZON.StopIntent': function () {
this.response.speak('Goodbye');
this.emit(':responseReady');
},
'AMAZON.HelpIntent': function () {
this.response.speak('you can ask for a fact by saying, tell me a fact.');
this.response.listen('try again');
}
};


function getAnw(fact) {
var myFacts = [
'I’m doing great',
'Work at Rogat',
];

if(fact ==='How are you doing'){
    return myFacts[0];
}
else if(fact === 'What are you looking for'){
    return myFacts[1];

}
}