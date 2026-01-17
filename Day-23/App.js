const ex=require('express');
const app=ex();
app.listen(3000);
app.use((req,res,next)=>{ //Middleware
    console.log("Midleware1");
    next();
})
app.get('/',(req,res)=>{
    res.sendFile('./docs/home.html',{root:__dirname});
})
app.get('/course',(req,res)=>{
    res.sendFile('./docs/course.html',{root:__dirname});
})
app.use((req,res,next)=>{
    console.log("MidleWare2");
    next();
})
app.get('/index',(req,res)=>{
    res.sendFile('./docs/index.html',{root:__dirname});
})
app.use((req,res)=>{
    res.status(404).sendFile('./docs/notfund.html',{root:__dirname});
})