const { Router } = require("express");
const router = Router();

const { homePage,  categoryPage, loginPage, registerPage } = require("../controllers/book.js");

router.get("/", homePage);
router.get("/login",loginPage);
router.get("/category", categoryPage);

router.get("/register", registerPage);


module.exports = router;
