const express = require('express');
const app = express();
const path = require('path');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));// We do this to get access to 'views' everywhere no matter where we are present in the terminal

app.listen(3000,()=>{
    console.log("Listening on port 3000, Hurray");
})

app.get('/',(req,res)=>{                //Home Page
    res.render("home.ejs");//The default directory it assumes is views so no need to write views/home.ejs
})

app.get('/rand',(req,res)=>{ //Random means to show our ejs pages (HTML+JAVASCRIPT Pages)
    const numVariable = Math.floor(Math.random()*10)+1 ;
    res.render('random.ejs',{randVariable:numVariable}); //The second argument is a for passing our variable to our template.
    //The variable num assigned to rand and in our template we can access it using rand  keyword.
})

app.get('/r/:subreddit',(req,res)=>{
    const {subreddit} = req.params;
    res.render('subreddit.ejs',{subreddit}); //another way of passing, just write the variable you want to send and use the same variable in your template ejs file
});

app.get('/cats',(req,res)=>{  //Working of how it works with database
    const cats = [
        'Blue','Rocket','Monty','Stephanie','Winston'
    ];   //For now pretend the cat names in cat are coming from a databse
    //We will pass the cat list through a cat template
    res.render('cats.ejs',{cats});

})