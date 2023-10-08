var generator = require('generate-password');

var password = generator.generate({
	length: 10,
	numbers: true
});

// generate random password made of 10 characters including numbers eg.'uEyMTw32v9'
console.log(password);