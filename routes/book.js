const { Router } = require("express");
const router = Router();

const {
  homePage,
  categoryPage,
  loginPage,
  registerPage,
  shoppingCartPage,
  detailPage
} = require("../controllers/book.js");

router.get("/", homePage);
router.get("/login", loginPage);
router.get("/category", categoryPage);
router.get("/book/:id", detailPage);
router.get("/register", registerPage);
router.get("/shopping-cart", shoppingCartPage);

module.exports = router;
