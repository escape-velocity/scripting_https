


var https = require('https');

function getHTML (options, callback)  {
  var chunks = '';
  //defined the empty variable as a string


  https.get(options, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
      chunks += data;
      //inside of the data function we added the append to the variable
    });
    response.on('end', function() {
      callback(chunks);
      //output the chunks to the terminal
    });
  });
}
function printHTML (html) {
  console.log(html);
}
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};
getHTML(requestOptions, printHTML);