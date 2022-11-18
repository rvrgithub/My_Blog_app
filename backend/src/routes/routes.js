const express = require("express");
const {
  createContent,
  getAllContent,
  updateContent,
  deleteContent,
} = require("../controllers/content_controller");
const { registerUser, loginUser } = require("../controllers/userController");
const authenticate = require("../middleware/authenticate");
const authorise = require("../middleware/authorise");
const router = express.Router();
//  routes for curd blog....
router.post("/blog/new",authenticate, createContent);
router.get("/blog", 
// authorise("admin"),
getAllContent);
router.route("/blog/:id").put(authenticate,authorise(["admin","content_writer"]),updateContent).delete(authenticate,authorise(["admin","content_writer"]),deleteContent);

// for all user auth...
router.post("/register", registerUser);
router.post("/login", loginUser);
module.exports = router;
