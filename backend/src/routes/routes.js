const express = require("express");
const {
  createContent,
  getAllContent,
  updateContent,
  deleteContent,
  getContentById,
} = require("../controllers/content_controller");

// uodated
const {
  registerUser,
  loginUser,
  getAllUser,
  getUserById,
} = require("../controllers/userController");

const authenticate = require("../middleware/authenticate");
const authorise = require("../middleware/authorise");
const router = express.Router();
//  routes for curd blog....

// uodated
router.post(
  "/blog/new",
  // authenticate,
  createContent
);
router.get(
  "/blog",
  // authorise("admin"),
  getAllContent
);
router
  .route("/blog/:id")
  .put(
    // authenticate, authorise(["admin", "content_writer"]),
    updateContent
  )
  .delete(
  // authenticate, authorise(["admin", "content_writer"]), 
  deleteContent)
  .get(getContentById);
router.get("/user/:id",getUserById)
// for all user auth...
router.get("/user", getAllUser);
router.post("/register", registerUser);
router.post("/login", loginUser);
module.exports = router;
