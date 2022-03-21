const homePage = (req, res) => {
  res.render("home-page.ejs");
};

const categoryPage = (req, res) => {
  res.render("category-page.ejs");
};

const login = (req, res) => {
res.render ("login-page");
};

const registerPage = (req, res) => {
  const title = `Register`
  res.render("register-page", { title });
};

module.exports = { homPage, loginPage, categoryPage, registerPage };
