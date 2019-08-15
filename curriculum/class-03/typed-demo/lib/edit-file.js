'use strict';

const util = require('util');
//util.promisify(fs.readfile) returns promise so you can use .then .catch etc 
const fs = require('fs'); 

//callbacks
myFileSystem.readFile(`${__dirname}/person.json`, //path into file
  (error, personString) => {
    if(error) {
      console.error('ERROR'); //console error for error handling 
    } else {
        console.log(personString.toString()); //console for testing 
      return personString.toString();
    }
  });


//hold var for read/modify file 

//promises
class FileSystem { //creates a class for the FileSystem constructor
    readFile(fileName, callBack) { //readFile takes two params: fileName and callBack, ref'd in index.js
        fs.readFile(fileName, (error, contents) => {
            if (error) {
                callBack(error); //error handling if bad request
            } else {
                console.log(contents.toString());
                //TODO: refactor with own string instead of relying on toString (stretch)
                callBack(undefined, contents.toString());
            }
        });

    }
    //not sure what the issue is with this code block? 
    readFilePromise = util.promisify(fs.readFile);
    module.exports = exports = (file) => {
        return readFilePromise(file)
            .then(contents => contents.toString())
            .catch(error => error);
    }
}


module.exports = FileSystem;


//to modify json.parse loop thru object and change then stringify iot rinse repeat 

var fs = require("fs");
var writeObject = {
    firstName: 'Harry',
    lastName: 'Potter',
    hair: {
        type: 'messy',
        color: 'black'
    },
    favoriteFoods: ['pumpkin juice', 'cauldron cake'],
    married: true,
    kids: 3
};

fs.writeFile("./person.json", JSON.stringify(writeObject), (err) => {
    if (err) {
        console.error(err);
        return;
    };
    console.log("Harry Potter must not go back to Hogwarts");
});


