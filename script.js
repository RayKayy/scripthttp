// require `request` and the Node `fs` (filesystem) module
var request = require('request');
var fs = require('fs');



request.get('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', (err) => {
    console.log(err);
    throw err;
  })
  .on('data', () => {
    console.log('dling...');
  })
  .on('response', (response) => {
    console.log('Response Status Code: ', response.statusCode);
    console.log('Response Message: ', response.statusMessage);
    console.log('Response Content Type: ', response.headers['content-type']);
    console.log('dled');
  })
  .pipe(fs.createWriteStream('./future.jpg'));
