const { Router } = require("express");
const router = Router();

const { homePage,  categoryPage, loginPage, registerPage, shoppingCartPage } = require("../controllers/book.js");

router.get("/", homePage);
router.get("/login",loginPage);
router.get("/category", categoryPage);
router.get("/register", registerPage);
router.get("/shopping-cart", shoppingCartPage);


module.exports = router;
