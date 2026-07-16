const bot = mineflayer.createBot({
    host: config.host || 'SkySMP6007.aternos.me',
    port: config.port || 40447,
    username: config.username || 'AnikaBot',
    version: config.version || false,
    auth: 'offline' 
});
