const { goals } = require('mineflayer-pathfinder');

module.exports = {
    name: 'come',
    description: 'বটটি নিখুঁতভাবে পথ চিনে আপনার কাছে আসবে',
    execute(bot, sender, args) {
        const player = bot.players[sender];
        if (!player || !player.entity) {
            return bot.chat(`${sender}, আমি তোমাকে দেখতে পাচ্ছি না!`);
        }

        const pos = player.entity.position;
        bot.chat(`আসছি ${sender}!`);
        
        // প্লাগইন ব্যবহার করে গোল (Goal) সেট করা
        bot.pathfinder.setGoal(new goals.GoalNear(pos.x, pos.y, pos.z, 1));
    }
};
