const { Router } = require("express");
const router = Router();

const { homepage } = require("../controllers/book.js");

router.get("/", homepage);

module.exports = router;
