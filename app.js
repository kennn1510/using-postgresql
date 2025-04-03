const express = require("express");
const app = express();
const usernameRoute = require("./routes/username");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/", usernameRoute);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
