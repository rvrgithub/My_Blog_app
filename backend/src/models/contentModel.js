const mongoose = require("mongoose");
const contentSchema = new mongooseSchema({
  title: {
    type: String,
    required: [true, "Plese enter your title"],
  },
  descritpion: {
    type: String,
    required: [true, "Please write your description"],
    minLength: [200, "Please write altest 200 words"],
  },
  image: [
    {
      url: {
        type: String,
        required: true,
      },
      public_id:{
        type: String,
        required: true,
      }
    },
  ],
},
 {
    versionKey:false,
    timestamps:true
}
);

const Content = mongoose.model("content", contentSchema);
module.exports = Content;
