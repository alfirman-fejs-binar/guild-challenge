const { Router } = require("express");
const router = Router();
const { homePage, categoryPage, registerPage,detailPage } = require("../controllers/book.js");

router.get("/", homePage);
router.get("/category", categoryPage);
router.get("/book/:id", detailPage);
router.get("/register", registerPage);

module.exports = router;
