const express = require("express");
const router = express.Router();
const User = require("../models/user");

//getting all
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
//getting one
router.get("/:id", getUser, (req, res) => {
  res.json(res.user);
});
//creating one
router.post("/", async (req, res) => {
  const user = new User({
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    dateJoined: req.body.dateJoined,
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
//updating one
router.patch("/:id", newUser, async (req, res) => {
  if (req.body.email != null) {
    res.user.email = req.body.email;
  }
  if (req.body.username != null) {
    res.user.username = req.body.username;
  }
  if (req.body.password != null) {
    res.user.password = req.body.password;
  }
  if (req.body.dateJoined != null) {
    res.user.dateJoined = req.body.dateJoined;
  }

  try {
    const updatedUser = await res.user.save();
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
//deleting one
router.delete("/:id", getUser, async (req, res) => {
  try {
    await res.user.remove();
    res.json({ message: "Deleted User" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getUser(req, res, next) {
  let user;
  try {
    user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: "Cannot find user" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.user = user;
  next();
}

module.exports = router;
