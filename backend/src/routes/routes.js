const express = require("express");
const {
  createContent,
  getAllContent,
  updateContent,
  deleteContent,
} = require("../controllers/content_controller");
const { registerUser, loginUser } = require("../controllers/userController");
const router = express.Router();
//  routes for curd blog....
router.post("/blog/new", createContent);
router.get("/blog", getAllContent);
router.route("/blog/:id").put(updateContent).delete(deleteContent);

// for all user auth...
router.post("/register", registerUser);
router.post("/login", loginUser);
module.exports = router;
