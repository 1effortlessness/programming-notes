// list all *.md files in current folder

const fs = require('fs');
const path = require('path');

const folder = path.resolve(__dirname);
const files = fs.readdirSync(folder);

const targetFiles = files.filter(file => file.includes('Apr'));
console.log(targetFiles);

// rename all the files: remove ' page' from the file name
// targetFiles.forEach(file => {
//   const newFile = file.replace(' page', '');
//   fs.renameSync(file, newFile)
//   console.log(`Renamed ${file} to ${newFile}`);
// })

targetFiles.forEach(file => {
  const [filename, type] = file.split('.')
  const date = new Date(filename);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const newFilename =  `${year}-${month}-${day}.${type}`
  fs.renameSync(file, newFilename);
  console.log(`Renamed ${file} to ${newFilename}`);
})
