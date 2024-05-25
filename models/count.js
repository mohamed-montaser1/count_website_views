const { Schema, model } = require("mongoose");

const countSchema = new Schema({
  count: {
    type: Number,
    default: 0,
  },
  id: {
    type: String,
    default: "1",
  },
});

module.exports = model("count", countSchema);
