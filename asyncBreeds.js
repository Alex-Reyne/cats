// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, whenDone) {
  // console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // console.log("In readFile's Callback: it has the data");
    if(error) whenDone(undefined);
    if(!error) whenDone(data);
  });
};

breedDetailsFromFile('Bombay', printCatBreed = breed => {
  // console.log('return value: ', breed);
});

module.exports = breedDetailsFromFile;