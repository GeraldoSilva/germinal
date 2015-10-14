var position = -1,
    speed = 10,
    element = null,
    cursorInterval= null,
    specialChar = {
        '*':'<br/>',
        ' ': "&nbsp;"},
    respostas = {
        "procuro uma oportunidade": "Serio?*Nao me diga!!!*",
        "nada": "Voce e um peixe?*",
        "dilma": "Grrrrrr*",
        "": "??????????*",
        "?": "????????????????????*"
    };
    commands = {'help': function()
        {
            return "Nao vou te ajudar";
        },
        'color' : function(options)
        {
            if(options[1] != undefined) {
                getElement('console').style.color = options[1];
            }
            return false;
        },
        'clear' : function(){
            message = '';
            element.innerHTML = '';
            return false;
        }
    }

var message = '  _     __   _  ___  _ _  _     _   _ _  ___  ___   _ _  _   __  /^\\*'
            + ' / \\   / _| / \\|_ _|| U |/ \\   / \\ | | || __|| o \\ | | |/ \\ / _|| __|*'
            + '| o | ( (_ | o || | |   ( o ) ( o )| U || _| |   / | V ( o | (_ | _|*'
            + '|_n_|  \\__||_n_||_| |_n_|\\_/   \\_,7|___||___||_|\\\\  \\_/ \\_/ \\__||___|**';

window.onclick = function(){
    getElement('message').focus();
}

function frame()
{
    toogleReader(false);
    var time = Math.floor(speed * Math.random());
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
        msg.style.visibility = "visible";
    } else {
        msg.style.visibility = "hidden";
        msg.disabled = true;
    }
}

function start() {
    element = getElement('console');
    frame();
}

function getChar()
{
    return message.slice(position, position+1);
}

function getElement(id)
{
    return document.getElementById(id);
}

function readCommand()
{
    var text = getRespostaAlatorias(),
        value = getElement('message').value.toLowerCase(),
        com = value.split(' ');

    if (respostas[value] != undefined)
    {
        text = respostas[value];
    } else if (typeof commands[com[0]] == 'function') {
        text = commands[com[0]](com);
    }
    if (text) {
        message = message + text;
        element.innerHTML += 'catho@servers.devel$ '+value+"<br/>";
    }
    getElement('message').value = '';
    frame();
    return false;
}

function getRespostaAlatorias() {
    var msg = [
        "As pessoas mudam. E muitas vezes se tornam as pessoas que elas disseram que nunca iriam se tornar.",
        "Voce se surpreende ao perceber o quanto pode suportar.",
        "Se seu trabalho era me proteger, voce foi pessima.",
        "Pessoas nao sao como bonecas, nao podemos brincar com elas e depois guarda-las em caixas.",
        "Eu prefiro morrer do que perder a vida!",
        "Voce pode viver tempos interessantes.",
        "E incrivel o numero de Super-viloes com doutorado.",
        "Quando seu melhor amigo leva um fora... voce fica bebado com ele.",
        "Ter voce de volta foi a coisa mais feliz que aconteceu na minha vida. E nao quero que acabe.",
        "Voce usa tanto uma mascara que acaba esquecendo quem voce e.",
        "Voce deve desistir da vida que planejou para poder ter a vida que o aguarda.",
        "Nao chefe, nao estou dormindo, e que pousou um inseto no meu olho e eu estou tentando mata-lo sufocado!",
        "Nao existem pessoas frias, existem pessoas que aprenderam a bloquear seus sentimentos.",
        "Cara, sinto muito por voce. Infelizmente, o sentimento e nausea.",
        "E o que fazer quando seu melhor nao e bom o bastante?",
        "E o amor que eles tem por voce, ajudara a te guiar ate a luz, ou voce se perdera nessa escuridao?",
        "Voce tem um bom coracao.. Entregue-o para alguem que se importe.",
        "Todos precisamos acreditar em herois. Mesmo que os melhores estejam longe da perfeicao.",
        "Nao sou um completo inutil, posso servir de mau exemplo.",
        "Prefiro ser anti-social do que fingir que gosto das pessoas.",
        "A vida nao tem que ser perfeita. So tem que ser vivida.",
        "Nao se desculpe por quem voce e, e pelo o que voce quer.",
        "Eu nao corro, eu nao me escondo, eu nao peco um tempo.",
        "O problema do pessoal do pronto socorro e que eles nao precisam do socorro.",
        "Nao deixe nada te botar pra baixo, e o unico jeito de viver!",
        "O cerebro das pessoas para de funcionar quando pensam que vao perder alguem que amam.",
        "Acha que conhece as pessoas e elas te surpreendem.",
        "Fazer parte de algo especial, nos torna especial!",
        "Nos tres juntos, como nos velhos tempos. O irmao que me amou demais, e um que nao me amou suficiente.",
        "Nao sou um completo inutil, posso servir de mau exemplo.",
        "Nos so enxergamos duas coisas nas pessoas: O que queremos ver e o que elas querem mostrar.",
        "Aprendi que a melhor forma de nao se magoar e fingir que nao tem um coracao.",
        "Mulheres nao tem prostata, eu pesquisei!",
        "Voce entendeu o que fez hoje? Mentiu para mim, estragou as nossas chances.",
        "Ninguem pode tirar isso de voce, esse e o nosso dia perfeito. Pra sempre.",
        "O cerebro das pessoas para de funcionar quando elas acham que vao perder alguem que ama.",
        "Voce sabe o que quer, mas foje do que precisa.",
        "Nao sou egoista. Apenas valorizo a unica pessoa do mundo em quem eu posso confiar: eu mesma.",
        "E o fim do mundo. E so o comeco.",
        "Porque nos somos seres humanos e quando nos, humanos, queremos algo, muito, muito mesmo, nos mentimos!",
        "La em Pato Branco tinha uma mulher que tinha um segredo.",
        "Que segredo, Bozena?",
        "Nao sei, era segredo dai.",
        "Como voce pode se importar tao pouco consigo mesmo? Qual o seu problema?",
        "As pessoas que nos fazem felizes, nunca sao as pessoas que nos esperamos. Entao quando voce encontrar alguem, tem que dar valor.",
        "A Fisica e teorica mas a diversao e real.",
        "Ate mesmo o passaro que voa mais alto uma hora tem que pousar no chao.",
        "Tudo e possivel. O impossivel apenas demora mais.",
        "Voce ja partiu meu coracao precisa atirar nele tambem?",
        "No command 'teste' found, did you mean:*"
            + " Command 'testr' from package 'testrepository' (universe)*"
            + " Command 'test' from package 'coreutils' (main)*"
            + "teste: command not found"];
    return msg[Math.floor(Math.random()*msg.length)]+"*";
}

window.onload = start;