const { Router } = require("express");
const router = Router();

const { homepage, detailPage } = require("../controllers/book.js");

router.get("/", homepage);
router.get("/book/:id", detailPage);

module.exports = router;
