const { pathfinder, Movements, goals } = require('mineflayer-pathfinder');

module.exports = {
    name: 'pathfinder',
    load(bot) {
        // বটের মধ্যে পথ চেনার প্লাগইন লোড করা হচ্ছে
        bot.loadPlugin(pathfinder);
        
        // বট যাতে মাইনক্রাফটের ব্লক, সিঁড়ি ও গর্ত বুঝে চলতে পারে তার মুভমেন্ট সেট করা
        bot.once('spawn', () => {
            const defaultMove = new Movements(bot, bot.registry);
            bot.pathfinder.setMovements(defaultMove);
        });
    }
};
