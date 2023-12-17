const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const url =
  "mongodb+srv://huzaifa084567:12345@cluster0.wpihnwn.mongodb.net/your-database-name?retryWrites=true&w=majority";
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("connected to the database"))
  .catch(() => console.log("not conncted"));

app.listen(1000, () => {
  console.log("Server is running on port 1000");
});

app.use(
  cors()
);
const laptoprouter = require("./schemas/productrouter/laptop");
const userrouter = require("./schemas/productrouter/user");
app.use(bodyParser.json({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", (req, res) => {
  res.send("thiis response");
});
