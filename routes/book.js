const { Router } = require("express");
const router = Router();

const { homepage } = require("../controllers/book.js");
const { detailPage } = require("../controllers/book.js");

router.get("/", homepage);
router.get("/detail/:id", detailPage);

module.exports = router;
