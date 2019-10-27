
if(process.env.NODE_ENV === 'producion') {
    // we are in production - return the prod of keys
    module.exports = require('./prod');
}
else{
    // we are in developement -  return th dev keys
    module.exports = require('./dev');
}

