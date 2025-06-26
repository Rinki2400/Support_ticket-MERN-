const express = require("express");
const router = express.Router();
const {registerUser,loginUser} = require("../controllers/userController");

// Register new user
router.post("/registrate", registerUser);

// Login user
router.get("/login", loginUser);


module.exports = router;
