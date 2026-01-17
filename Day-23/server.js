const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    console.log("REquest MAde");
    res.setHeader("Content-Type",'text/html');
    let path='./docs/';
    if(req.url=='/'||req.url=='/home'){
        path+='home.html';
    }
    else if(req.url=='/index'){
        path+='index.html';
    }
    else if(req.url=='/courses'){
        path+='course.html';
    }
    else if(req.url=='/notfund'){
        path+='notfund.html';
    }
    fs.readFile(path,(err,data)=>{
        if(err) {console.log(err.message); res.end()}
        else{
            res.end(data);
        }
    })
    // console.log(req.url);
    // console.log(req.method);
});
server.listen(3000,'localhost',()=>{
    console.log("Server Running");
})