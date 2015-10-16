var Commands = {
    console: null,
    messageBox: null,
    lastCommand: null,

    construct: function(console, messageBox) {
        Commands.messageBox = messageBox;
        Commands.console = console;
    },
    isExists: function(command) {
        var com = command.split(' ');
        return (typeof Commands[com[0]] == 'function');
    },
    invoke: function(command) {
        Commands.lastCommand = command;
        var com = command.split(' ');
        return Commands[com[0]](com.splice(1));
    },
    printLastComand: function(){
        Commands.console.innerHTML += Commands.lastCommand + '<br/>';
    },
    help: function() {
        return "Nao vou te ajudar*";
    },
    color: function(options) {
        if(options[0] != undefined) {
            Commands.console.style.color = options[0];
            Commands.messageBox.style.color = options[0];
            Commands.printLastComand();
        }
        return false;
    },
    image: function(src) {
        Commands.printLastComand();
        Commands.console.innerHTML += '<img src="' + src + '"/><br/>';
        return false;
    },
    clear: function() {
        Commands.messageBox.value = '';
        Commands.console.innerHTML = '';
        return false;
    }
}