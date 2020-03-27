const express = require("express");
const UserModel = require("../models/User");
const passport = require("passport");
const _ = require("lodash");
const router = express.Router();

// REGISTER A USER
router.post("/signup", async (req, res, next) => {
  const { username, password, campus, course, image } = req.body;
  // Create the user
  const newUser = await UserModel.create({
    username,
    password,
    campus,
    course,
    image
  });

  // Directly login user
  req.logIn(newUser, err => {
    res.json(
      _.pick(req.user, [
        "username",
        "_id",
        "campus",
        "course",
        "createdAt",
        "updatedAt"
      ])
    );
  });
});

// LOGIN
router.post("/login", passport.authenticate("local"), (req, res) => {
  // Return the logged in user
  return res.json(
    _.pick(
      _.pick(req.user, [
        "username",
        "_id",
        "campus",
        "course",
        "createdAt",
        "updatedAt"
      ])
    )
  );
});

// LOGOUT
router.get("/logout", (req, res, next) => {
  if (req.user) {
    req.logout();
    return res.json({ status: "Log out" });
  } else {
    return res
      .status(401)
      .json({ status: "You have to be logged in to logout" });
  }
});

/* EDIT */
router.post("/edit", async (req, res, next) => {
  try {
    const id = req.user._id;
    const { username, campus, course } = req.body;
    await Users.findByIdAndUpdate(id, {
      username,
      campus,
      course
    });
    return res.json({ status: "User profile edited!" });
  } catch (error) {
    return res.status(401).json({ status: "Not Found" });
  }
});

/* UPLOAD */
router.post("/upload", async (req, res, next) => {
  try {
    const id = req.user._id;
    const { image } = req.body;
    await Users.findByIdAndUpdate(id, {
      image
    });
    return res.json({ status: "User image edited!" });
  } catch (error) {
    return res.status(401).json({ status: "Not Found" });
  }
});

/* EDIT */
router.post("/edit", (req, res, next) => {
  const { username, campus, course } = req.body;
  res.json(`User updated ${username} ${campus} ${course}`);
});

// WHOAMI
router.get("/whoami", (req, res, next) => {
  if (req.user)
    return res.json(
      _.pick(req.user, [
        "username",
        "_id",
        "campus",
        "course",
        "createdAt",
        "updatedAt"
      ])
    );
  else return res.status(401).json({ status: "No user session present" });
});

module.exports = router;
