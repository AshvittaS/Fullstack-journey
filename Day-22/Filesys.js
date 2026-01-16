const fs=require('fs');
// if(fs.existsSync('./docs/file.txt')){
//     fs.unlink('./docs/file.txt',(err)=>console.log(err.message));
//     console.log('file Deleted');
// }
fs.mkdir('./docs',(err)=>{
    if(fs.existsSync('./docs')) console.log('Folder Already Created');
    else if(err) console.log(err.message);
    else console.log('Folder created');
    
});
console.log('This will run first to prove Async func is this ');
fs.writeFile('./docs/file.txt','This is from Filesys',(err)=>{if(fs.existsSync('./docs/first.txt')) console.log("File exist"); else if(err) console.log(err.message);})
    fs.readFile('./docs/file.txt',(err,data)=>{
        if(err) console.log(err.message);
        else console.log(data.toString());
    })
        if(fs.existsSync('./docs')){
            fs.rmdir('./docs',(err)=>{
                console.log(err);
            });
        }
