module.exports = {
    name: 'info',
    description: 'বটের বর্তমান হেলথ, পজিশন এবং ফুড লেভেল দেখাবে',
    execute(bot, sender, args) {
        const health = Math.round(bot.health);
        const food = Math.round(bot.food);
        const pos = bot.entity.position;
        
        bot.chat(`আমার হেলথ: ${health}❤️ | ফুড লেভেল: ${food}🍗 | পজিশন: X: ${Math.round(pos.x)}, Y: ${Math.round(pos.y)}, Z: ${Math.round(pos.z)}`);
    }
};
