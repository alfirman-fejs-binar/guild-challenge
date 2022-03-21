const { Router } = require("express");
const router = Router();

const { homePage, categoryPage, registerPage } = require("../controllers/book.js");

router.get("/", homePage);
router.get("/category", categoryPage);

router.get("/register", registerPage);


module.exports = router;
