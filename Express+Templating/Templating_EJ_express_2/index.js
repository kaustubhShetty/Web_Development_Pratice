const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');
console.log(redditData);

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

app.get('/r/:subreddit',(req,res)=> {
    const {subreddit} = req.params;
    const data = redditData[subreddit];
    //console.log(data);
    if(data){
        res.render('subreddit.ejs',{ ...data }); //... is used to send a spreaded version
    //instead of ...data we could write just data but then in subreddit.ejs file to acces the contents you need brackets notation
    //eg to access name in subreddit.ejs you need to write data["name"]
    }
    else{
        res.render('notfound.ejs',{subreddit});
    }   
});
app.get('/cats',(req,res)=>{  //Working of how it works with database
    const cats = [
        'Blue','Rocket','Monty','Stephanie','Winston'
    ];   //For now pretend the cat names in cat are coming from a databse
    //We will pass the cat list through a cat template
    res.render('cats.ejs',{cats}); //another way of passing, just write the variable you want to send and use the same variable in your template ejs file

})