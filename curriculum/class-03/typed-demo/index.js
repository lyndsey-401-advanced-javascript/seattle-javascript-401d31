'use strict';

const FileSystem = require('./lib/edit-file.js');

const myFileSystem = new FileSystem();
//constructor for new FileSystem object 

console.log(__dirname);


myFileSystem.readFile(`${__dirname}/person.json`) //this is how we call/name the pathway to the file we are trying to read/modify
  .then(personString => { //starts promise chain and hopefully sends the person.json object to the terminal as a string that can be read 
    return personString.toString(); //stringy person.json
  })
  .then(personString => {
    console.log(personString.toString());//console.log for testing 
  })
  .catch(error => console.error(error)); //error handling 
