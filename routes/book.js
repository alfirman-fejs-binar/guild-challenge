const { Router } = require("express");
const router = Router();

const { homePage, categoryPage } = require("../controllers/book.js");

router.get("/", homePage);
router.get("/category", categoryPage);


module.exports = router;
