const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

// @route   POST api/users
// @desc    Register User
// @access  Public
router.post(
  "/",
  [
    check("name", "Name is required")
      .not()
      .isEmpty(),
    check("email", "Please, include a valid email address").isEmail(),
    check(
      "password",
      "Please provide a password with at least 6 character"
    ).isLength({ min: 6 })
  ],
  (req, res) => {
    // console.log(req.body);
    const errors = validationResult(res);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    res.send("User route");
  }
);

module.exports = router;
