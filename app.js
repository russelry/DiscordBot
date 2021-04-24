//Geting the Discord.js library
const Discord = require('discord.js');
const request = require('request');

require('dotenv').config();

//The Discord constructor
const client = new Discord.Client({
    partials: ['MESSAGE', 'REACTION', 'CHANNEL']
});

//Connects bot to the server and outputs a message to the server saying it's ready
client.on('ready', () => {
    console.log('Bot is ready');
});

//Logs in using the BOT_TOKEN
client.login(process.env.BOT_TOKEN);

//Just an array of jokes
const jokes = [
    'I went to a street where the houses were numbered 8k, 16k, 32k, 64k, 128k, 256k and 512k. It was a trip down Memory Lane.',
    '“Debugging” is like being the detective in a crime drama where you are also the murderer.',
    'The best thing about a Boolean is that even if you are wrong, you are only off by a bit.',
    'A programmer puts two glasses on his bedside table before going to sleep. A full one, in case he gets thirsty, and an empty one, in case he doesn’t.',
    'If you listen to a UNIX shell, can you hear the C?',
    'Why do Java programmers have to wear glasses? Because they don’t C#.',
    'What sits on your shoulder and says “Pieces of 7! Pieces of 7!”? A Parroty Error.',
    'When Apple employees die, does their life HTML5 in front of their eyes?',
    'Without requirements or design, programming is the art of adding bugs to an empty text file.',
    'Before software can be reusable it first has to be usable.',
    'The best method for accelerating a computer is the one that boosts it by 9.8 m/s2.',
    'I think Microsoft named .Net so it wouldn’t show up in a Unix directory listing.',
    'There are two ways to write error-free programs; only the third one works.',
];

//If the user sends a 'Hello' DM to the bot it will reply with a message
client.on('message', (msg) => {
    if(msg.content === 'Hello') msg.reply('Zach is a bitch lol');
});

//If the user types '?joke' in a channel the bot will reply with a joke from the joke array listed above
client.on('message', (msg) => {
    if(msg.content === '?joke') {
        msg.channel.send(jokes[Math.floor(Math.random() * jokes.length)]);
    }
});

var n = 0;

client.on('message', (message) => {
    if(message.content === '?loop') {
        message.reply('Loop started');
        var interveral = setInterval(function() {
            request('http://store.digitalriver.com/store?Action=buy&Env=BASE&Locale=en&ProductID=5458374200&SiteID=defaults', function (
            error,
            response,
            body
            ) {
                n = body.search("00016");
                console.log('Searching body...');
                console.log(n);
                if(n != '-1') {
                    message.channel.send("Site updated!");
                }
            })
            
        }, 600000)
    }
});
            

