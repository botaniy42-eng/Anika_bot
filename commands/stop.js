module.exports = {
    name: 'stop',
    description: 'বটের সব চলমান কাজ (যেমন হাঁটা বা ফলো করা) বন্ধ করবে',
    execute(bot, sender, args) {
        bot.clearControlStates();
        
        if (bot.currentFollowInterval) {
            clearInterval(bot.currentFollowInterval);
            bot.currentFollowInterval = null;
        }

        bot.chat(`সব কাজ বন্ধ করা হলো, ${sender}! আমি এখন শান্ত হয়ে দাঁড়িয়ে আছি।`);
    }
};
