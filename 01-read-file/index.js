const fs = require('fs');
const path = require('path');

let pathFile = path.join(__dirname, 'text.txt');

const readStream = fs.ReadStream(pathFile, 'utf-8');

let data = '';
readStream.on('data', chunk => data += chunk);
readStream.on('end', () => console.log('End', data));
readStream.on('error', error => console.log('Error', error.message));




