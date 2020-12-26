//My express server

const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));


app.listen(3000,(req,res)=>{
    console.log('Listening on port 3000, hurray!!');
})

app.get('/tacos',(req,res)=>{
    res.send("Successful get request, here's your page");
})

app.post('/tacos',(req,res)=>{
    const {meat,quantity}=req.body;
    res.send(`Successful post request, All the updations in the backend are done..The values updated are ${quantity} ${meat} tacos`);
})