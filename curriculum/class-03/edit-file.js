fs.readFile('/foo.txt', function(err, data) {
    // TODO: Error Handling Still Needed!
    console.log(data);
  });


//Assigment- write code in edit-file.js that modifies a file on your computer
//Rqmnts: 1. use fs 2. accept file name as parameter 3. read contents of file 4. convert to JS 5. alter values
//best guess - modify person.json lol

'use strict';

// Vinicio - file operations using callbacks

// the util package can be used to convert fs to promises too
// https://www.npmjs.com/package/fs-extra uses promises
const fs = require('fs');
const fsExtra = require('fs-extra');

class FileSystem {
    readFile(fileName, externalCallback) {
        fs.readFile(fileName, (error, fileContents) => {
            if(error) {
                externalCallback(error);
            } else {
                // console.log(fileContents.toString());
                externalCallback(undefined,fileContents.toString());
            }
        });
    }

    readFilePromises(fileName) {
        // Vinicio - this line sets up two callbacks: rejection  and success
        return fsExtra.readFile(fileName);
    }
}

module.exports = FileSystem;