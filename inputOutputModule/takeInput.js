var stdin = process.openStdin();
var events = require('events');
var eventEmmiter = new events.EventEmitter();
var exicuteCommand = function(command){
    if(command == 'newUser'){
        // eventEmmiter.on('creatNewUserEvent',creatNewFunction)
        console.log('new user not yet written');
    }else{
        console.log('stupit command');
    }
}
module.exports = {
    startTakingInputs : function(){
        stdin.addListener("data", function(d) {
            // note:  d is an object, and when converted to a string it will
            // end with a linefeed.  so we (rather crudely) account for that
            // with toString() and then trim()
            const command = d.toString().trim();
            exicuteCommand(command);
        })
    },
    // creatNewFunction : function(){
    //     console.log("creating new user");
    // },
    // onNewUserCreated : eventEmmiter.on('creatNewUserEvent',creatNewFunction)
}

