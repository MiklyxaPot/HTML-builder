const fs = require('fs');
const path = require('path');

const {stdin, stdout} = process;
const creatTextFile = fs.WriteStream(path.join(__dirname,'text.txt') )

stdout.write('напишите, пожалуйста какой-то текст\n');

stdin.on('data', data => {
  const text = data.toString().trim();
  if(text === 'exit'){
    process.exit(stdout.write('Пока. спасибо за запись'))
  }else{
    creatTextFile.write(data);
  }
}
);

process.on('SIGINT', () =>{
  process.exit(stdout.write('Пока. спасибо за запись'))
})