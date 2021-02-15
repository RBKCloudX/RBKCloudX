const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const app = express();
app.use(cors());
app.use(morgan());
app.use(express.static(__dirname + "/../react-client/dist"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
