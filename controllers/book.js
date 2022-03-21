const homePage = (req, res) => {
  res.render("home-page.ejs");
};
const categoryPage = (req, res) => {
  res.render("category-page.ejs");
};

export const registerPage = (req, res) => {
  const title = `Register`
  res.render("register-page", { title });
};

module.exports = { homPage, categoryPage };