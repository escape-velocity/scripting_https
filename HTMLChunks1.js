

var https = require('https');

function getAndPrintHTML() {
  var chunks = '';
  //defined the empty variable as a string
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
      chunks +=  data;
    });
    response.on('end', function() {
      console.log(chunks)
      //output the chunks to the terminal
    });
  });
}

getAndPrintHTML();
//call the function to run it