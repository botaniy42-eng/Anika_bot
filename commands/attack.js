module.exports = {
    name: 'attack',
    description: 'বটটি নির্দিষ্ট কোনো প্লেয়ার বা মবকে আক্রমণ করবে',
    execute(bot, sender, args) {
        const targetName = args[0];
        if (!targetName) {
            return bot.chat(`${sender}, কার ওপর হামলা করব? নাম বলো!`);
        }

        const target = bot.players[targetName]?.entity;
        if (!target) {
            return bot.chat(`আমি ${targetName}-কে দেখতে পাচ্ছি না!`);
        }

        bot.chat(`${targetName}-কে আক্রমণ করছি!`);
        bot.attack(target);
    }
};
