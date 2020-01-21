const express = require("express");
const PORT = process.env.PORT || 4000;
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

// Define middleware here
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// connect to Mongo DB
mongoose.connect(
  // TODO- set up mlab on heroku and replace credentials below
  process.env.MONGODB_URI || "mongodb://localhost/todo" ,
  { useNewUrlParser: true }
);
// connect and use router
const routes = require("./Routes/routes");
app.use("/", routes);
app.use("/api", routes);

//PORT list ening on
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
