var position = -1,
    element = null,
    cursorInterval= null,
    specialChar = {
        '*':'<br/>',
        ' ': "&nbsp;"};

var message = Config.START_MESSAGE;


function getElement(id)
{
    return document.getElementById(id);
}

var Writer = {
    speed: Config.WRITE_SPEED,
    console: null,
    reader: null,

    init: function() {
        Writer.setUp();
        Writer.startCommands();
        Writer.render()
    },
    setUp: function() {
        Writer.console = getElement(Config.TERMINAL);
        Writer.reader = getElement(Config.MESSAGE_READER);
    },
    startCommands: function() {
        if (Commands) {
            Commands.construct(
                Writer.console,
                Writer.reader
            );
        }
    },
    write: function() {
        var text = Writer.console.innerHTML,
            item = getChar();
        if (message.length > position) {
            clearTimeout(cursorInterval);
            if (specialChar[item] != undefined) {
                Writer.console.innerHTML = text + specialChar[item]
            } else {
                Writer.console.innerHTML = text + getChar();
            }
            position++;
            Writer.render();
        } else {
            clearTimeout(interval);
            toogleReader(true)
        }
    },
    render: function() {
        toogleReader(false);
        var time = Math.floor(Writer.speed * Math.random());
        interval = setTimeout(
            Writer.write,
            time
        );
    }
}

window.onclick = function(){
    getElement(Config.MESSAGE_READER).focus();
}

function toogleReader(show) {
    var msg = getElement(Config.MESSAGE_READER)
    if (show) {
        msg.disabled = false;
        msg.focus();
    } else {
        msg.disabled = true;
    }
}

function start() {
    Writer.init();
}

function getChar()
{
    return message.slice(
        position,
        position+1
    );
}

function readCommand()
{
    var text = GenericMessage.getRandowMessage() + '*',
        value = getElement(Config.MESSAGE_READER).value;

    if (Questions.isExists(value)) {
        text = Answers.getAnswer(
            Questions.getIndex(value)
        ) + '*';
    } else if (Commands && Commands.isExists(value)) {
        text = Commands.invoke(value);
    }
    if (text) {
        message = message + text;
        getElement(Config.TERMINAL).innerHTML += value + "<br/>";
    }
    getElement(Config.MESSAGE_READER).value = '';
    Writer.render();
    return false;
}
window.onload = start;