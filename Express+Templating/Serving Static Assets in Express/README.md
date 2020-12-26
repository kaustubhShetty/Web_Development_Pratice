<h1> Serving Static Assets In Express </h1>
<h2> What does it mean? </h2>
<p> It deals with a server sending/rendering your static files(eg. CSS/JS/HTML/Images/Audio etc) on the cliend end. </p>
<h2> How do you go about this?</h2>
<p>STEP1 - Make a folder/directory called public and add whatever static files you want to add.</p>
<p>STEP2 - Write these commands in your express app</p>
<p> const path = require('path');</p>
<p> app.use(express.static(path.join(__dirname,'public')));  </p>
<p>STEP3 - Add the link of your Static file to your ejs file eg. link rel="stylesheet" href="/app.css" </p>
 
 
