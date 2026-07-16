const { goals } = require('mineflayer-pathfinder');

module.exports = {
    name: 'follow',
    description: 'বটটি আপনাকে তাড়া করে বা পিছু পিছু যাবে',
    execute(bot, sender, args) {
        const player = bot.players[sender];
        if (!player || !player.entity) {
            return bot.chat(`তোমাকে খুঁজে পাচ্ছি না, ${sender}!`);
        }

        bot.chat(`আমি তোমাকে ফলো করছি, ${sender}!`);
        
        // অনবরত প্লেয়ারের পেছনে হাঁটার গোল সেট করা
        bot.pathfinder.setGoal(new goals.GoalFollow(player.entity, 1), true);
    }
};
