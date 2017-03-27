const path = require("path").join
, express = require("express");

var router = express.Router();

router.get("/i/*\.(css|js|ico|png|jpg|svg|ttf|woff|woff2)", function(req, res)
{
    res.sendFile(join(__base, "wwwroot", "resources", req.originalUrl).replace(/(\\i\\|\/i\/)/, "/"));
});

module.exports = router;
