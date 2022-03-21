const homePage = (req, res) => {
  res.render("home-page.ejs");
};

const categoryPage = (req, res) => {
  res.render("category-page.ejs");
};

const loginPage = (req, res) => {
res.render ("login-page");
};

const registerPage = (req, res) => {
  const title = `Register`
  res.render("register-page", { title });
};

const shoppingCartPage = (req, res) => {
  const title = 'Shopping Cart';
  res.render("shopping-cart-page", { title });
};

module.exports = { homePage, loginPage, categoryPage, registerPage, shoppingCartPage };
