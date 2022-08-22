const mongoose = require("mongoose");

const posterSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user",require:true},
    poster: { type: String },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const posterData = mongoose.model("posterData",posterSchema);
module.exports=posterData;