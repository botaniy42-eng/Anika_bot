module.exports = {
    name: 'sleep',
    description: 'কাছে কোনো বিছানা থাকলে বট ঘুমাবে',
    async execute(bot, sender, args) {
        const bed = bot.findBlock({
            matching: block => bot.isABed(block),
            maxDistance: 5
        });

        if (!bed) {
            return bot.chat(`কাছাকাছি কোনো বিছানা খুঁজে পেলাম না!`);
        }

        try {
            await bot.sleep(bed);
            bot.chat(`শুভ রাত্রি! আমি ঘুমাতে গেলাম।`);
        } catch (err) {
            bot.chat(`আমি ঘুমাতে পারছি না! কারণ: ${err.message}`);
        }
    }
};
