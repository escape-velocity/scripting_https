

var https = require('https');

function getAndPrintHTML(options) {
  var chunks = '';
  //defined the empty variable as a string


  https.get(options, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
      chunks += data;
      //inside of the data function we added the append to the variable
    });
    response.on('end', function() {
      console.log(chunks)
      //output the chunks to the terminal
    });
  });
}

getAndPrintHTML({
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  });
//call the function to run it