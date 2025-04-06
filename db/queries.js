const pool = require("./pool");

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

async function searchUsernames(searchTerm) {
  try {
    const { rows } = await pool.query(
      "SELECT * FROM usernames WHERE username LIKE '%' || $1 || '%'",
      [searchTerm]
    );
    console.log(rows);
    return rows;
  } catch (error) {
    console.error("Error searching usernames:", error);
    throw error;
  }
}

async function deleteAllUsernames() {
  console.log("Starting to delete all usernames");
  await pool.query("DELETE FROM usernames");
  console.log("All usernames have been deleted");
}

module.exports = {
  getAllUsernames,
  insertUsername,
  searchUsernames,
  deleteAllUsernames,
};
