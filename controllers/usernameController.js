const db = require("../db/queries");
require("dotenv").config();

exports.usernameGet = async (req, res) => {
  const searchTerm = req.query.search;
  let usernames;
  if (searchTerm) {
    usernames = await db.searchUsernames(searchTerm);
    console.log(`Usernames matching ${searchTerm}:`, usernames);
    res.send(
      `Usernames matching ${searchTerm}: ${usernames
        .map((user) => user.username)
        .join(", ")}`
    );
  } else {
    usernames = await db.getAllUsernames();
    console.log("Usernames: ", usernames);
    res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
  }
};

exports.newUsernameGet = (req, res) => {
  res.render("new");
};

exports.newUsernamePost = async (req, res) => {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
};
