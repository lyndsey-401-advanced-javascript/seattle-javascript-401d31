'use strict';

const FileSystem = require('./lib/edit-file.js');

const myFileSystem = new FileSystem();
//constructor for new FileSystem object 



//promise handler pathway? verify 
myFileSystem.readFile(`${__dirname}/person.json`) //this is how we call/name the pathway to the file we are trying to read/modify
  .then(personString => { //starts promise chain and hopefully sends the person.json object to the terminal as a string that can be read 
    return personString.toString(); //stringy person.json
  })
  .then(personString => {
    console.log(personString.toString());//console.log for testing 
  })
  .catch(error => console.error(error)); //error handling 











const FileSystem = require('./lib/edit-file.js');

const myFileSystem = new FileSystem();

// myFileSystem.readFile(`${__dirname}/quote.txt`,
//   (error, fileString) => {
//     if(error) {
//       console.error('ERROR');
//     } else {
//       iAmSMRT = fileString;
//       console.log(fileString);
//       // Make a different call here
//       // This leads to callback hell
//       // call(() => {
//       //   call(() => {
//       //     call(() => {
//       //       call(() => {
//       //         call(() => {
//       //         });
//       //       });
//       //     });
//       //   });
//       // });
//     }
//   });


//promises
myFileSystem.readFilePromises(`${__dirname}/quote.txt`)
  .then(fileString => { // Vinicio - this stars the promise chain - 1
    iAmSMRT = fileString.toString();
    console.log(fileString.toString());
    return 'kali is great';
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
