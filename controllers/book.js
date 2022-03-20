const homePage = (req, res) => {
  res.render("home-page.ejs");
};
const categoryPage = (req, res) => {
  res.render("category-page.ejs");
};

module.exports = { homPage, categoryPage };