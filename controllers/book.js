const homePage = (req, res) => {
  res.render("home-page.ejs");
};
const categoryPage = (req, res) => {
  res.render("category-page.ejs");
};

const registerPage = (req, res) => {
  const title = `Register`
  res.render("register-page", { title });
};

const detailPage = (req, res) => {
  const id = req.params.id
  res.render("detail-page.ejs", {id: id} );
}

module.exports = { homePage, categoryPage, registerPage, detailPage };