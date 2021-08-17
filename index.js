const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
app.use(express.json());
app.use(cors());

const PORT = 8000;

const servicesCardRoute = require("./routes/servicesCard");

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(console.log("Connecting to mongoDB"))
  .catch((err) => console.log(err));

app.use("/servicesCard", servicesCardRoute);

app.get("/", (req, res) => {
  res.send("Hello Buddy!!!");
});

app.listen(process.env.PORT || PORT);
