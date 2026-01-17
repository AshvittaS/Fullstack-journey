const fs=require('fs');
const { buffer } = require('stream/consumers');
const readSteamer=fs.createReadStream('./docs/LargeF.txt',{'encoding':'utf-8'});
const writeSteamer=fs.createWriteStream('./docs/CopyLarge.txt');
// readSteamer.on("data",(buffer)=>{
//     console.log('\nNewBuffer\n');
//     // console.log(buffer);
//     writeSteamer.write(buffer);
// })
readSteamer.pipe(writeSteamer);