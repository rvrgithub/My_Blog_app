const { default: mongoose } = require("mongoose");
const Content = require("../models/contentModel");
const User = require("../models/userModel");

// create content ....

exports.createContent = async (req, res) => {
  // try {
  //   const content = await Content.create(req.body);
  //   console.log("content", content);
  //   // console.log("req.body", req.body);

  //   // const session = await mongoose.startSession();
  //   // session.startTransaction();
  //   // await content.blogs.push();

  //   return res.status(201).send({
  //     success: true,
  //     content: content,
  //   });
  // } catch (err) {
  //   return res.status(404).send({ message: err.message });
  // }


  const { title, description, image, user } = req.body;

  let existingUser;
  try {
    existingUser = await User.findById(user);
  } catch (err) {
    return console.log(err);
  }
  if (!existingUser) {
    return res.status(400).json({ message: "Unable TO FInd User By This ID" });
  }
  const blog = new Content({
    title,
    description,
    image,
    user,
  });

  // update user_id here ... 
  // for adding more blogs here.....
  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await blog.save({ session });
    existingUser.blogs.push(blog);
    await existingUser.save({ session });
    await session.commitTransaction();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err });
  }

  return res.status(200).json({ blog });
};

// get contents .............
exports.getAllContent = async (req, res) => {
  try {
    const content = await Content.find().lean().exec();
    res.status(201).send({
      success: true,
      content,
    });
    // console.log("content", content);
  } catch (err) {
    await res.status(404).send({ message: "Route is working fine" });
  }
};

// update contents............
exports.updateContent = async (req, res) => {
  try {
    let content = await Content.findById(req.params.id).lean().exec();
    if (!content) {
      return res.status(404).send({
        success: false,
        message: "content not found",
      });
    }
    content = await Content.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    return res.status(201).send({ content: content });
  } catch (err) {
    return res.status(404).send({ message: err.message });
  }
};

// delete contents............
exports.deleteContent = async (req, res) => {
  // try {
  //   let content = await Content.findById(req.params.id).populate("user");
  //   console.log("content del", content);
  //   if (!content) {
  //     return res.status(404).send({
  //       success: false,
  //       message: "content not found",
  //     });
  //   }
  //   // await content.remove();
  //   return res
  //     .status(201)
  //     .send({ success: true, message: "content delete successfully" });
  // } catch (err) {
  //   return res.status(404).send({ message: err.message });
  // }


  const id = req.params.id;
  console.log("content id", id);
  let blog;
  try {
    blog = await Content.findByIdAndRemove(id).populate("user");
    console.log("content del", blog);
    await blog.user.blogs.pull(blog);
    await blog.user.save();
  } catch (err) {
    console.log(err);
  }
  if (!blog) {
    return res.status(500).json({ message: "Unable To Delete" });
  }
  return res.status(200).json({ message: "Successfully Delete" });
};

// get content by id .....
exports.getContentById = async (req, res, next) => {
  try {
    const content = await Content.findById(req.params.id);
    if (!content) {
      return res.status(404).send({
        success: false,
        message: "content not find",
      });
    }
    res.status(201).send({ success: true, content });
  } catch (err) {
    return res.status(404).send({ message: err.message });
  }
};
