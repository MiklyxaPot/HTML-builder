const fs = require('fs');
const path = require('path');

const {stdin, stdout, exit} = process;

function ctreatFile() {
  fs.writeFile('text.txt', '', (error) => {
    if (error) return console.error(error.message);
  });
}
stdout.write('напишите, пожалуйста какой-то текст\n');
stdin.on('data', data => {
  fs.access('text.txt', fs.constants.F_OK, (err) => {
    if (err) ctreatFile();
  fs.writeFile('text.txt', data)

  
})})