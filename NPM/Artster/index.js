var figlet = require('figlet');
const color = require('colors');

figlet('Hey there', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data.rainbow);
});