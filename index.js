const mineflayer = require('mineflayer');
const fs = require('fs');
const path = require('path');

const config = require('./config.json');

const bot = mineflayer.createBot({
    host: config.host || 'arafat602.minefort.com',
    port: config.port || 19132,
    username: config.username || 'Anika',
    version: config.version || false,
    auth: 'offline' 
});

bot.commands = new Map();
const commandsPath = path.join(__dirname, 'commands');
if (fs.existsSync(commandsPath)) {
    fs.readdirSync(commandsPath).filter(file => file.endsWith('.js')).forEach(file => {
        const command = require(`./commands/${file}`);
        bot.commands.set(command.name, command);
    });
}

const pluginsPath = path.join(__dirname, 'plugins');
if (fs.existsSync(pluginsPath)) {
    fs.readdirSync(pluginsPath).filter(file => file.endsWith('.js')).forEach(file => {
        const plugin = require(`./plugins/${file}`);
        if (typeof plugin.load === 'function') {
            plugin.load(bot);
        }
    });
}

const aiChat = require('./ai/chat.js');

bot.on('chat', (username, message) => {
    if (username === bot.username) return;

    if (message.startsWith('!')) {
        const args = message.slice(1).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();

        const command = bot.commands.get(commandName);
        if (command) {
            command.execute(bot, username, args);
        }
    } else {
        if (aiChat && typeof aiChat.respond === 'function') {
            aiChat.respond(bot, username, message);
        }
    }
});

bot.on('death', () => {
    setTimeout(() => {
        bot.respawn();
    }, 1000);
});

bot.on('end', () => {
    setTimeout(() => {
        createMyBot();
    }, 10000);
});
