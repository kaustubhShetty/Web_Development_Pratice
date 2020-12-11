const express = require("express");
const app = express();
//console.dir(app);

app.listen(3000,()=>{
    console.log("Listening on port 3000");
})

///app.use is responds to every single request made and not really to a particular one

// app.use((req,res)=>{
//     console.log("We got a new Request!!");
//     res.send({'color':'red'});
// })

app.get('/',(req,res)=>{        //Home or root resource page
    res.send("<h2>This is the homepage</h2>");
})

app.get('/r/:something',(req,res)=>{  //Anything that follows /r/ format, this message will be displaced
    const { subreddit } = req.params;
    res.send(`<h1> This is a ${subreddit} subredit </h1>`);
})

app.get('/cats',(req,res)=>{
    res.send("A request to cat page has been made, MEOW!!!");
});

app.post('/cats',(req,res)=>{
    res.send("<h1>You have send a post request on '/cats' </h2>")
})

app.get('/dogs',(req,res)=>{
    res.send("<h1>You have requested the dog page, Woof Woof!!</h1>");
})

app.get('*',(req,res)=>{  //This means everything..Imp to write it at the end..executes only if req matches nothing
    res.send("Your request matches nothing");
})