var franc = require('franc');
var langs = require('langs');
const input = process.argv[2];
const langCode = franc(input);
if(langCode==='und'){
    console.log("Sorry couldnt figure it out");
}
else{
    console.log(langs.where("3",franc(input)).name);
}
    


