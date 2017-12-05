var mongoose = require('mongoose');

var playerSchema = new mongoose.Schema({
name: { type: String, required: [true, "First Name is required"]}
});

var playerName = mongoose.model('playerName', playerSchema);

module.exports = playerName;
