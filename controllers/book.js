const homePage = (req, res) => {
  const title = "Home";
  res.render("home-page.ejs", { title });
};

const categoryPage = (req, res) => {
  const title = "Category";
  res.render("category-page.ejs", { title });
};

const loginPage = (req, res) => {
  const title = "Login";
  res.render("login-page", { title });
};

const registerPage = (req, res) => {
  const title = `Register`;
  res.render("register-page", { title });
};

const detailPage = (req, res) => {
  const id = req.params.id;
  res.render("detail-page.ejs", { id: id });
};

const shoppingCartPage = (req, res) => {
  const title = "Shopping Cart";
  res.render("shopping-cart-page", { title });
};

module.exports = {
  homePage,
  loginPage,
  categoryPage,
  registerPage,
  detailPage,
  shoppingCartPage,
};
