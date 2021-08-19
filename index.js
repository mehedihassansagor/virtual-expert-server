const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
app.use(express.json());
app.use(cors());

const PORT = 8000;

const servicesCardRoute = require("./routes/servicesCard");
const headerInfoTopServices = require("./routes/headerInfoTopService")
const topServicesRoute = require("./routes/topServices");
const virtualService = require("./routes/whyChooseVirtualExports");
const headerInfoVirtualExports = require("./routes/headerInfoVirtualExports")
const banner = require("./routes/banner");

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(console.log("Connecting to mongoDB"))
  .catch((err) => console.log(err));

app.use("/servicesCard", servicesCardRoute);
app.use("/headerInfoTopServices",headerInfoTopServices);
app.use("/topServices", topServicesRoute);
app.use("/headerInfoVirtualExports",headerInfoVirtualExports);
app.use("/virtualService",virtualService);
app.use("/banner",banner);

app.get("/", (req, res) => {
  res.send("Hello Buddy!!!");
});

app.listen(process.env.PORT || PORT);
