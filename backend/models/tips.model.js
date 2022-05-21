const mongoose = require("mongoose");
const Tips = mongoose.model(
	"Tips",
	new mongoose.Schema({
		match_name: String,
		sport_type: String,
		match_date: Date,
		tip_type: String,
		tip_pick: String,
		tip_odds: Number,
		tip_stake: Number,
		admin_id: String,
		admin_name: String,
	})
);
module.exports = Tips;
