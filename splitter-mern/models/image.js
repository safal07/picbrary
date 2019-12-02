const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var imageSchema = new Schema({
  creator : {type: Schema.ObjectId, ref: "User", required: true},
  created: {type: Date, default: Date.now()},
  image : {type: Object, required: true}
});

var Image = mongoose.model('Image', imageSchema);

module.exports = Image;
