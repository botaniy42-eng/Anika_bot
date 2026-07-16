const memory = {};

module.exports = {
    // কোনো তথ্য মনে রাখা
    remember(key, value) {
        memory[key] = value;
    },

    // মনে রাখা তথ্য খুঁজে বের করা
    recall(key) {
        return memory[key] || "আমার এই বিষয়টি মনে নেই।";
    }
};
