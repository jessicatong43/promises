/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
// require all the stuff we need from other files


var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // pluckAsync (readFilePath) - returns username
    // .then getGithubprofAs - sends request to API
    // .then (use fs.writefile to save the body text to writeFilePath)
    // .catch(getstatuscodeAsync)
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};

// getStatusCodeAsync: getStatusCodeAsync,
// pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
// getGitHubProfileAsync: getGitHubProfileAsync,
//   generateRandomTokenAsync: generateRandomTokenAsync,
//   readFileAndMakeItFunnyAsync: readFileAndMakeItFunnyAsync