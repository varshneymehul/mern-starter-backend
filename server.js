// Configuring ENV
const dotenv = require("dotenv");
if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}
// App config
const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");
const port = process.env.PORT || 4000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middlewares
app.use(cors());

mongoose.connect(
  process.env.DATABASE_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  () => {
    console.log("Database is connected");
  }
);

app.listen(port, function () {
  console.log(`Server running on port ${port}`);
});
