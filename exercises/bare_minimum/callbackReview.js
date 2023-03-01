/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('needle');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // return  fs.readFile takes filepath, and callback which takes an error object and fileContents
  fs.readFile(filePath, 'utf8', (err, fileContents) => {
    // if there's an error
    if (err) {
      // throw an error
      callback(err);
    // else,
    } else {
      // split fileContents on \n and assign to a variable
      callback(err, fileContents.split('\n')[0]);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // use needle to send a get request on the url we're given
  request.get(url.toString(), (err, response) => {
  // needle takes in a function as its second arg,
  // that inner function takes err and a response and will:
  // if there is an error:
    if (err) {
    // then: callback(err)
      callback(err);
  // else:
    } else {
    // callback(err, response.statusCode)
      callback(err, response.statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
