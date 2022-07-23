const express = require("express");
router = express.Router();

require("./config/mongodb");

const userRoute = require("./routes/client.route.js");
const adminRoute = require("./routes/admin.route.js");


router.use("/user", userRoute);
router.use("/admin", adminRoute);

module.exports = router;