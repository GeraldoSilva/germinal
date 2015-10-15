var position = -1,
    speed = 10,
    element = null,
    cursorInterval= null,
    specialChar = {
        '*':'<br/>',
        ' ': "&nbsp;"};

var message = '  _     __   _   ___  _ _  _     _   _ _  ___  ___   _ _  _   __  /^\\*'
            + ' / \\   / _| / \\ |_ _|| U |/ \\   / \\ | | || __|| o \\ | | |/ \\ / _|| __|*'
            + '| o | ( (_ | o | | | |   ( o ) ( o )| U || _| |   / | V ( o | (_ | _|*'
            + '|_n_|  \\__||_n_| |_| |_n_|\\_/   \\_,7|___||___||_|\\\\  \\_/ \\_/ \\__||___|**';


function getElement(id)
{
    return document.getElementById(id);
}

var Writer = {
    speed: 10,

    init: function() {
        Writer.startCommands();
    },
    startCommands: function(){
        if (Commands) {
            Commands.construct(
                getElement('console'),
                getElement('message')
            );
        }
    }

}

window.onclick = function(){
    getElement('message').focus();
}

function frame()
{
    toogleReader(false);
    var time = Math.floor(Writer.speed * Math.random());
    interval = setTimeout(
        printChar,
        time
    );
}

function printChar()
{
    var text = element.innerHTML,
        item = getChar();
    if (message.length > position) {
        clearTimeout(cursorInterval);
        if (specialChar[item] != undefined) {
            element.innerHTML = text + specialChar[item]
        } else {
            element.innerHTML = text + getChar();
        }
        position++;
        frame()
    } else {
        clearTimeout(interval);
        toogleReader(true)
    }
}

function toogleReader(show) {
    var msg = getElement('message')
    if (show) {
        msg.disabled = false;
        msg.focus();
    } else {
        msg.disabled = true;
    }
}

function start() {
    Writer.init();
    element = getElement('console');
    frame();
}

function getChar()
{
    return message.slice(position, position+1);
}



function readCommand()
{
    var text = GenericMessage.getRandowMessage() + '*',
        value = getElement('message').value;

    if (Questions.isExists(value)) {
        text = Answers.getAnswer(
            Questions.getIndex(value)
        );
    } else if (Commands && Commands.isExists(value)) {
        text = Commands.invoke(value);
    }
    if (text) {
        message = message + text;
        element.innerHTML += value+"<br/>";
    }
    getElement('message').value = '';
    frame();
    return false;
}



window.onload = start;