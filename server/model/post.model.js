var mongoose = require('mongoose');
var Schema	= mongoose.Schema;
var PostSchema = new Schema({
	author: [{type: Schema.Types.ObjectId, ref: 'users'}],
	content: String,
	datetime: Date,
	publish: Boolean
});

module.exports = mongoose.model('post', PostSchema);