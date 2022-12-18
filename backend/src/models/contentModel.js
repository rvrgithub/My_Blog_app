const mongoose = require("mongoose");
const contentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      // required: [true, "Plese enter your title"],
    },
    description: {
      type: String,
      // required: [true, "Please write your description"],
      minLength: [100, "Please write altest 200 words"],
    },
    image:{
      type:String,
      require:true
    },
    user:{
      type:mongoose.Types.ObjectId,
      ref:"User",
      required:true
    }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Content = mongoose.model("content", contentSchema);
module.exports = Content;
