'use strict';

const FileSystem = require('./lib/edit-file');

const myFileSystem = new FileSystem();

console.log(__dirname);


myFileSystem.readFile(`${__dirname}/person.json`) //this is how we call/name the pathway to the file we are trying to read/modify
  .then(fileString => { // Vinicio - this stars the promise chain
    return fileString.toString();
  })
  .then(message => { // 2
    console.log(message);
    //return myFileSystem.readFilePromises(`${__dirname}/quote2.txt`);
    throw 'ERROR!';
  })
  .then(fileString => {
    console.log(fileString.toString());
    console.log(message);
  })
  .catch(error => console.error(error));
