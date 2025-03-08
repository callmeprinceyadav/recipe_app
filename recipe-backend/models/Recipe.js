const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    image: String,
    summary: String,
    ingredients: [String],
    instructions: String,
    nutritionalInfo: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    savedAt: { type: Date, default: Date.now },
});

const Recipe = mongoose.model('Recipe', RecipeSchema);
module.exports = Recipe;
