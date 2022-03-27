// . Use default console log command to print string to the console.
console.log('Hello World');

const os = require('os');
const fs = require('fs');

// Obtain System architecture, platform and number of CPUs from the OS module
// and print them to the console.
console.log('Architecture ' + os.arch());
console.log('CPUs ' + os.cpus().length);
console.log('OS ' + os.platform());

// Use the system variable __dirname to set the file location.
const fileName = __dirname + '/test.txt';

// Read the file using readFile asynchronous method and print the content of the file
// to console.
fs.readFile(fileName, (err, data) => {
    if (err) {
        console.error(err);
    }
    console.log(data.toString());
});

// Use the readFileSync method to read the file synchronously.
const data = fs.readFileSync(fileName);
console.log(data.toString());

// Add two variables containing path to the source and destination files.
const outFileName = __dirname + '/test-copy.txt';

// Create read stream and write stream from the source file and destination file
// respectively.
const readStream = fs.createReadStream(fileName);
const writeStream = fs.createWriteStream(outFileName);

// Pipe the read stream to write stream.
readStream.pipe(writeStream);

readStream.on('data', data => {
    console.log(data.toString());
});

//Import the http module from the core libraries.
const http = require('http');

// http.createServer((req, res) => {
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<h1>Hello World</h1>');
//     res.end();
// }).listen(3000); // Listen on port 3000.

http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    switch (req.method) { case 'GET':
        res.write('<h1>Hello World</h1>');
        res.end(); break; case
    'POST':
        req.on('data', data => {
            res.write('<h1>Hello ' + data + '</h1>');
            res.end();
        });
        break;
    }
}).listen(3000, (err) => {
    console.log('Server is listening to port 3000')
}); // Listen on port 3000.