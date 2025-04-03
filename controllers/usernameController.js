const db = require("../db/queries");
require("dotenv").config();


exports.usernameGet = async (req, res) => {
  const usernames = await db.getAllUsernames();
  console.log("Usernames: ", usernames);
  res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
};

exports.newUsernameGet = (req, res) => {
  res.render("new");
};

exports.newUsernamePost = async (req, res) => {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
};
