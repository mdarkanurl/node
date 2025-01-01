// const fs = require('fs');

// fs.writeFile('demo.txt', 'Hello I\'m Mohammad Arkan.', (err) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log('Please, check the demo file.');
//     }
// });

// fs.readFile('demo.txt', 'utf-8', (err, data) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data); 
//     }
// });

// fs.rename('demo.txt', 'update.txt', (err) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log('Please, check you file\'s name.');
//     }
// });

// fs.unlink('update.txt', (err) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log('We\'ve successfully delete the file.');      
//     }
// });

// const test = require('fs');

// test.writeFile('test.txt', 'This is test file.', (err) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log('Successful');
//     }
// });

// test.appendFile('test.txt', ' I\'ve to notice everything.', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('Hello Arkan, learn everything deeply.');
//     }
// });

// test.readFile('test.txt', 'utf-8', (err, data) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// test.rename('test.txt', 'demo.txt', (err) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log('successfully rename.');
//     }
// });

// test.unlink('demo.txt', (err) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log('Delete fucking file.');
//     }
// });

// test.exists('desmo.txt', (result) => {
//     if (result) {
//         console.log('found');
//     } else {
//         console.log('not found');
//     }
// });

const demo = require('fs');

demo.exists('demo.txt', (result) => {
    if (result) {
        console.log('found');
    } else {
        console.log('Not found');
    }
});