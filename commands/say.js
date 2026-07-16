module.exports = {
    name: 'say',
    description: 'বট চ্যাটে আপনার দেওয়া কথাটি বলবে',
    execute(bot, sender, args) {
        const message = args.join(' ');
        if (!message) {
            return bot.chat(`কী বলব বলো? say <মেসেজ> লেখো।`);
        }
        bot.chat(message);
    }
};
