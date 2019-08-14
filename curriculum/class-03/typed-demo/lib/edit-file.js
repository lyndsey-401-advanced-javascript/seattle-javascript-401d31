'use strict';

const fs = require('fs');

class FileSystem { //creates a class for the FileSystem constructor
    readFile(fileName, callBack) { //readFile takes two params: fileName and callBack, ref'd in index.js
        fs.readFile(fileName, (error, contents) => {
            if (error) {
                callBack(error); //error handling if bad request
            } else {
                console.log(contents.toString());
                //TODO: refactor with own string instead of relying on toString 
                callBack(undefined, contents.toString());
            }
        });
    }

    readFilePromises(fileName) {
        //sets up two callbacks, rejection and success -- but how?? 
        return fsExtra.readFile(fileName);
    }
}


module.exports = FileSystem;
