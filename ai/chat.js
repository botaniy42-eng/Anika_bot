module.exports = {
    respond(bot, sender, message) {
        const msg = message.toLowerCase();

        // সাধারণ কিছু প্রশ্নের উত্তর (আপনি চাইলে এখানে আরও যোগ করতে পারেন)
        if (msg.includes('hello') || msg.includes('হাই') || msg.includes('hey')) {
            return bot.chat(`হ্যালো ${sender}! কেমন আছো?`);
        }
        
        if (msg.includes('কেমন আছ') || msg.includes('how are you')) {
            return bot.chat(`আমি ভালো আছি, ${sender}! তুমি কেমন আছো?`);
        }

        if (msg.includes('তোমার নাম কি') || msg.includes('your name')) {
            return bot.chat(`আমার নাম ${bot.username}, আমি একটি এআই বট!`);
        }

        if (msg.includes('বিদায়') || msg.includes('bye')) {
            return bot.chat(`বিদায় ${sender}! আবার দেখা হবে।`);
        }
    }
};
