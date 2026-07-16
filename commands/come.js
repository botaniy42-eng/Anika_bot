module.exports = {
    name: 'come',
    description: 'বটটি আপনার কাছে চলে আসবে',
    execute(bot, sender, args) {
        const player = bot.players[sender];
        if (!player || !player.entity) {
            return bot.chat(`${sender}, আমি তো তোমাকে দেখতে পাচ্ছি না! একটু সামনে আসো।`);
        }

        const pos = player.entity.position;
        bot.chat(`আসছি ${sender}!`);
        
        // Mineflayer এর pathfinder থাকলে এটি আরও স্মুথলি কাজ করবে
        bot.lookAt(pos);
        // বেসিক মুভমেন্ট (সামনে হাঁটা)
        bot.setControlState('forward', true);
        setTimeout(() => bot.clearControlStates(), 3000); // ৩ সেকেন্ড হেঁটে থেমে যাবে
    }
};
