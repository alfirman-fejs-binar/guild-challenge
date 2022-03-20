const { Router } = require("express");
const router = Router();

const { homepage, categoryPage } = require("../controllers/book.js");

router.get("/", homepage);
router.get("/category", categoryPage);


module.exports = router;
