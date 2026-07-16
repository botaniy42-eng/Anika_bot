const bot = mineflayer.createBot({
    host: config.host || 'arafat602.minefort.com',
    port: config.port || 19132,
    username: config.username || 'Anika',
    version: config.version || false, // সার্ভারের ভার্সন অনুযায়ী এটি অটো ডিটেক্ট করবে
    auth: 'offline' 
});
