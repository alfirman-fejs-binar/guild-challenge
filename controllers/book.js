const homepage = (req, res) => {
  res.render("homepage.ejs");
};
const categoryPage = (req, res) => {
  res.render("category.ejs");
};

module.exports = { homepage, categoryPage };
