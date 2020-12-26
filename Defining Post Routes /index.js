//My express server

const express = require('express');
const { request } = require('http');
const app = express();

app.listen(3000,(req,res)=>{
    console.log('Listening on port 3000, hurray!!');
})

app.get('/tacos',(req,res)=>{
    res.send("Successful get request, here's your page");
})

app.post('/tacos',(req,res)=>{
    res.send("Successful post request, All the updations in the backend are done");
})