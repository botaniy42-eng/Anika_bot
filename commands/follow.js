module.exports = {
    name: 'follow',
    description: 'বটটি আপনাকে অবিরাম অনুসরণ করতে থাকবে',
    execute(bot, sender, args) {
        const player = bot.players[sender];
        if (!player || !player.entity) {
            return bot.chat(`তোমাকে খুঁজে পাচ্ছি না, ${sender}!`);
        }

        bot.chat(`ঠিক আছে, আমি এখন থেকে তোমাকে ফলো করছি!`);
        
        // প্রতি সেকেন্ডে প্লেয়ারের দিকে তাকানো ও হাঁটার লুপ
        const followInterval = setInterval(() => {
            const target = bot.players[sender]?.entity;
            if (!target) return;
            
            bot.lookAt(target.position);
            const dist = bot.entity.position.distanceTo(target.position);
            
            if (dist > 3) {
                bot.setControlState('forward', true);
            } else {
                bot.setControlState('forward', false);
            }
        }, 1000);

        // বট ডিসকানেক্ট বা কোনো কারণে থামানোর জন্য আমরা ইন্টারভাল সেভ করে রাখতে পারি
        bot.currentFollowInterval = followInterval; 
    }
};
