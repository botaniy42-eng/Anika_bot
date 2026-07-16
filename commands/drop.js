module.exports = {
    name: 'drop',
    description: 'বটের হাতের জিনিস বা পুরো ইনভেন্টরি ড্রপ করবে',
    execute(bot, sender, args) {
        const inventory = bot.inventory.items();
        if (inventory.length === 0) {
            return bot.chat(`আমার ইনভেন্টরি তো একদম খালি!`);
        }

        bot.chat(`সব আইটেম ফেলে দিচ্ছি!`);
        
        // সব আইটেম ড্রপ করার লুপ
        inventory.forEach(item => {
            bot.tossStack(item, (err) => {
                if (err) console.log(`আইটেম ফেলতে সমস্যা হয়েছে: ${err.message}`);
            });
        });
    }
};
